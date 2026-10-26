import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const niches = [
  {id: 'comedy', label: '😂 Comedy', emoji: '😂'},
  {id: 'dance', label: '💃 Dance', emoji: '💃'},
  {id: 'music', label: '🎵 Music', emoji: '🎵'},
  {id: 'beauty', label: '💄 Beauty', emoji: '💄'},
  {id: 'fashion', label: '👗 Fashion', emoji: '👗'},
  {id: 'food', label: '🍔 Food', emoji: '🍔'},
  {id: 'education', label: '📚 Education', emoji: '📚'},
  {id: 'motivation', label: '💪 Motivation', emoji: '💪'},
  {id: 'gaming', label: '🎮 Gaming', emoji: '🎮'},
  {id: 'lifestyle', label: '✨ Lifestyle', emoji: '✨'},
  {id: 'pets', label: '🐾 Pets', emoji: '🐾'},
  {id: 'travel', label: '✈️ Travel', emoji: '✈️'},
];

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('');

  const handleGenerate = () => {
    if (username.trim() === '' || selectedNiche === '') {
      alert('Mohon isi username dan pilih niche konten!');
      return;
    }

    navigation.navigate('Result', {
      username: username.trim(),
      niche: selectedNiche,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerEmoji}>🚀</Text>
          <Text style={styles.headerTitle}>TikTok FYP Helper</Text>
          <Text style={styles.headerSubtitle}>
            Strategi Konten & Hashtag untuk FYP
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Username TikTok</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan username TikTok kamu"
            placeholderTextColor="#666"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Pilih Niche Konten</Text>
          <View style={styles.nicheContainer}>
            {niches.map(niche => (
              <TouchableOpacity
                key={niche.id}
                style={[
                  styles.nicheButton,
                  selectedNiche === niche.id && styles.nicheButtonSelected,
                ]}
                onPress={() => setSelectedNiche(niche.id)}>
                <Text style={styles.nicheEmoji}>{niche.emoji}</Text>
                <Text
                  style={[
                    styles.nicheText,
                    selectedNiche === niche.id && styles.nicheTextSelected,
                  ]}>
                  {niche.label.split(' ')[1]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.generateButton} onPress={handleGenerate}>
          <Text style={styles.generateButtonText}>🎯 Generate Strategi FYP</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 App ini akan memberikan strategi konten, hashtag yang optimal, dan
            jadwal upload terbaik untuk meningkatkan peluang masuk FYP!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  headerEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00f2ea',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333',
  },
  nicheContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  nicheButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 12,
    width: '30%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  nicheButtonSelected: {
    backgroundColor: '#00f2ea',
    borderColor: '#00f2ea',
  },
  nicheEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  nicheText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  nicheTextSelected: {
    color: '#000',
  },
  generateButton: {
    backgroundColor: '#fe2c55',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#fe2c55',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#00f2ea',
  },
  infoText: {
    color: '#999',
    fontSize: 13,
    lineHeight: 20,
  },
});

export default HomeScreen;
