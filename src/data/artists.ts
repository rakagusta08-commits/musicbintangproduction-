import { Artist } from '@/types';

export const artists: Artist[] = [
  {
    id: 'akda09',
    name: 'AKDA09',
    role: {
      id: 'Grup Band',
      en: 'Music Band'
    },
    description: {
      id: 'Grup musik unggulan dari Music Bintang Production. Menghadirkan warna pop-rock alternatif dengan lirik puitis dan aransemen yang dinamis.',
      en: 'The flagship music group from Music Bintang Production. Delivering alternative pop-rock colors with poetic lyrics and dynamic arrangements.'
    },
    image: '/images/bandmbp.jpg'
  },
  {
    id: 'bintang-putra-sugiatno',
    name: 'BINTANG PUTRA SUGIATNO',
    role: {
      id: 'Artis Pop / Produser',
      en: 'Pop Artist / Producer'
    },
    description: {
      id: 'Bintang adalah musisi muda dan produser kreatif yang sudah aktif berkarya dan menciptakan musik sejak duduk di bangku SMK. Berbekal semangat eksplorasi yang tinggi, ia terus menghadirkan karya-karya pop modern dan pop-rock yang segar serta penuh energi bagi generasi muda.',
      en: 'Bintang is a creative young musician and producer who has been actively creating and producing music since his vocational high school (SMK) days. Driven by passion and exploration, he consistently delivers fresh, energetic modern pop and pop-rock tracks for the younger generation.'
    },
    image: '/images/bintangputrasugiatno.jpg',
    social: {
      instagram: 'https://www.instagram.com/btngsgtn_/',
      tiktok: 'https://www.tiktok.com/@bintang.sugiatno',
      spotify: 'https://open.spotify.com/intl-id/artist/6wBWpY55y17pPZePgn8C43',
      youtube: 'https://www.youtube.com/@MusicBintangProduction'
    },
    news: [
      {
        id: 'tribun-1',
        title: 'Potret Bintang Putra Sugiatno, Remaja Kreatif yang Menghidupkan Pop Rock untuk Generasi Muda',
        url: 'https://jabar.tribunnews.com/musik/1161728/potret-bintang-putra-sugiatno-remaja-kreatif-yang-menghidupkan-pop-rock-untuk-generasi-muda'
      }
    ]
  },
  {
    id: 'adel',
    name: 'ADELITA JULYS',
    role: {
      id: 'Artis Solo',
      en: 'Solo Artist'
    },
    description: {
      id: 'Artis berbakat dengan warna vokal yang khas dan emosional. Adel membawa nuansa segar ke dalam industri musik dengan lagu-lagu pop akustik yang menyentuh hati.',
      en: 'A talented artist with a distinct and emotional vocal tone. Adel brings a fresh nuance to the music industry with acoustic pop songs that touch the heart.'
    },
    image: '/images/adel.jpg',
    imagePosition: 'center 15%',
    social: {
      instagram: 'https://www.instagram.com/adelitajulys/',
      tiktok: 'https://www.tiktok.com/@adelitajulys'
    }
  },
  {
    id: 'yamo',
    name: 'YAMO ZEGA',
    role: {
      id: 'Artis Solo',
      en: 'Solo Artist'
    },
    description: {
      id: 'Musisi pendatang baru yang penuh energi. Gaya musiknya memadukan elemen pop urban dengan lirik yang sangat relevan dengan keseharian anak muda.',
      en: 'An energetic newcomer musician. His musical style blends urban pop elements with lyrics that are highly relevant to the daily lives of youth.'
    },
    image: '/images/fotoyamo.jpg',
    social: {
      instagram: 'https://www.instagram.com/yamozegaa/',
      tiktok: 'https://www.tiktok.com/@yamozegaa4'
    }
  }
];
