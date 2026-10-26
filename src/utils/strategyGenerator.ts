import {hashtagDatabase, contentTips, generalFYPTips} from '../data/hashtagDatabase';

export interface StrategyResult {
  username: string;
  niche: string;
  hashtags: string[];
  contentStrategy: string[];
  uploadSchedule: {
    bestTimes: string[];
    frequency: string;
    explanation: string;
  };
  generalTips: string[];
}

export const generateStrategy = (username: string, niche: string): StrategyResult => {
  const nicheKey = niche.toLowerCase() as keyof typeof hashtagDatabase;
  const hashtagData = hashtagDatabase[nicheKey] || hashtagDatabase.lifestyle;
  
  // Combine dan shuffle hashtags
  const allHashtags = [
    ...hashtagData.primary,
    ...hashtagData.secondary.slice(0, 4),
    ...hashtagData.trending.slice(0, 3),
  ];

  // Get content tips untuk niche
  const nicheContentTips = contentTips[nicheKey] || contentTips.lifestyle;

  // Generate upload schedule berdasarkan research
  const uploadSchedule = generateUploadSchedule(nicheKey);

  return {
    username,
    niche,
    hashtags: allHashtags,
    contentStrategy: nicheContentTips,
    uploadSchedule,
    generalTips: generalFYPTips.slice(0, 8),
  };
};

const generateUploadSchedule = (niche: string) => {
  // Best times berdasarkan data analytics TikTok Indonesia
  const schedules: {[key: string]: any} = {
    comedy: {
      bestTimes: [
        '12:00 - 13:00 (Jam makan siang)',
        '19:00 - 21:00 (Prime time malam)',
        '22:00 - 23:00 (Sebelum tidur)',
      ],
      frequency: '2-3 video per hari',
      explanation: 'Comedy content paling efektif saat orang butuh hiburan: istirahat makan siang dan waktu santai malam hari.'
    },
    dance: {
      bestTimes: [
        '15:00 - 17:00 (Sore hari)',
        '19:00 - 21:00 (Prime time malam)',
        '21:00 - 22:00 (Weekend vibes)',
      ],
      frequency: '1-2 video per hari',
      explanation: 'Dance content optimal saat audience punya energi tinggi dan mood untuk entertainment.'
    },
    music: {
      bestTimes: [
        '18:00 - 20:00 (Pulang kerja/sekolah)',
        '21:00 - 23:00 (Malam santai)',
        '07:00 - 09:00 (Pagi untuk mood booster)',
      ],
      frequency: '1-2 video per hari',
      explanation: 'Music content cocok untuk menemani aktivitas dan sebagai mood setter.'
    },
    beauty: {
      bestTimes: [
        '10:00 - 12:00 (Pagi-siang)',
        '19:00 - 21:00 (Malam hari)',
        '14:00 - 16:00 (Sore hari)',
      ],
      frequency: '1-2 video per hari',
      explanation: 'Beauty content optimal saat target audience (mayoritas wanita) sedang aktif browsing.'
    },
    fashion: {
      bestTimes: [
        '10:00 - 12:00 (Pagi-siang)',
        '15:00 - 17:00 (Sore hari)',
        '20:00 - 22:00 (Malam hari)',
      ],
      frequency: '1-2 video per hari',
      explanation: 'Fashion content efektif saat people looking for inspiration untuk outfit.'
    },
    food: {
      bestTimes: [
        '11:00 - 13:00 (Jam makan siang)',
        '17:00 - 19:00 (Mau dinner)',
        '21:00 - 22:00 (Late night craving)',
      ],
      frequency: '2-3 video per hari',
      explanation: 'Food content paling efektif saat orang lagi laper atau planning makan!'
    },
    default: {
      bestTimes: [
        '12:00 - 13:00 (Jam makan siang)',
        '18:00 - 20:00 (Pulang kerja/sekolah)',
        '21:00 - 23:00 (Prime time malam)',
      ],
      frequency: '1-2 video per hari',
      explanation: 'Waktu optimal adalah saat mayoritas user Indonesia aktif di TikTok.'
    }
  };

  return schedules[niche] || schedules.default;
};

export const copyHashtagsToClipboard = (hashtags: string[]): string => {
  return hashtags.join(' ');
};
