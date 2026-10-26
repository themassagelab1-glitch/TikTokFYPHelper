import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {RouteProp} from '@react-navigation/native';
import {generateStrategy, StrategyResult} from '../utils/strategyGenerator';

type ResultScreenRouteProp = RouteProp<
  {Result: {username: string; niche: string}},
  'Result'
>;

type ResultScreenProps = {
  route: ResultScreenRouteProp;
};

const ResultScreen: React.FC<ResultScreenProps> = ({route}) => {
  const {username, niche} = route.params;
  const [strategy, setStrategy] = useState<StrategyResult | null>(null);

  useEffect(() => {
    const result = generateStrategy(username, niche);
    setStrategy(result);
  }, [username, niche]);

  const copyHashtags = () => {
    if (strategy) {
      const hashtagText = strategy.hashtags.join(' ');
      Clipboard.setString(hashtagText);
      Alert.alert('✅ Berhasil!', 'Hashtag sudah dicopy ke clipboard!');
    }
  };

  if (!strategy) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.headerCard}>
        <Text style={styles.usernameLabel}>Username:</Text>
        <Text style={styles.username}>@{strategy.username}</Text>
        <View style={styles.nicheBadge}>
          <Text style={styles.nicheText}>📱 {strategy.niche.toUpperCase()}</Text>
        </View>
      </View>

      {/* Hashtags Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏷️ Hashtag Optimal</Text>
        <View style={styles.hashtagCard}>
          <View style={styles.hashtagContainer}>
            {strategy.hashtags.map((tag, index) => (
              <View key={index} style={styles.hashtagBadge}>
                <Text style={styles.hashtagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.copyButton} onPress={copyHashtags}>
            <Text style={styles.copyButtonText}>📋 Copy Semua Hashtag</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Upload Schedule */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⏰ Jadwal Upload Ideal</Text>
        <View style={styles.card}>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleLabel}>⏱️ Waktu Terbaik:</Text>
            {strategy.uploadSchedule.bestTimes.map((time, index) => (
              <View key={index} style={styles.timeSlot}>
                <Text style={styles.timeText}>• {time}</Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleLabel}>📊 Frekuensi Upload:</Text>
            <Text style={styles.frequencyText}>
              {strategy.uploadSchedule.frequency}
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoIcon}>💡</Text>
            <Text style={styles.infoText}>
              {strategy.uploadSchedule.explanation}
            </Text>
          </View>
        </View>
      </View>

      {/* Content Strategy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Strategi Konten</Text>
        <View style={styles.card}>
          {strategy.contentStrategy.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Text style={styles.tipNumber}>{index + 1}</Text>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* General Tips */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Tips Umum untuk FYP</Text>
        <View style={styles.card}>
          {strategy.generalTips.map((tip, index) => (
            <View key={index} style={styles.generalTipItem}>
              <Text style={styles.bulletPoint}>▸</Text>
              <Text style={styles.generalTipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          🚀 Konsistensi adalah kunci sukses di TikTok!
        </Text>
        <Text style={styles.footerSubtext}>
          Terus eksperimen dan analisa performa konten kamu
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    padding: 20,
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  headerCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#00f2ea',
  },
  usernameLabel: {
    color: '#999',
    fontSize: 14,
    marginBottom: 5,
  },
  username: {
    color: '#00f2ea',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nicheBadge: {
    backgroundColor: '#fe2c55',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  nicheText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  hashtagCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15,
  },
  hashtagBadge: {
    backgroundColor: '#fe2c55',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  hashtagText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  copyButton: {
    backgroundColor: '#00f2ea',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  copyButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleItem: {
    marginBottom: 15,
  },
  scheduleLabel: {
    color: '#00f2ea',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timeSlot: {
    marginLeft: 10,
    marginTop: 5,
  },
  timeText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  frequencyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 15,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#0a0a0a',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#00f2ea',
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  infoText: {
    color: '#ccc',
    fontSize: 13,
    flex: 1,
    lineHeight: 20,
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  tipNumber: {
    backgroundColor: '#fe2c55',
    color: '#fff',
    width: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    lineHeight: 28,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 12,
  },
  tipText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  generalTipItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    color: '#00f2ea',
    fontSize: 16,
    marginRight: 10,
    marginTop: 2,
  },
  generalTipText: {
    color: '#ddd',
    fontSize: 13,
    flex: 1,
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  footerText: {
    color: '#00f2ea',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  footerSubtext: {
    color: '#999',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default ResultScreen;
