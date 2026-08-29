import { Artist } from '@/types';

export const artists: Artist[] = [
  {
    id: 'bintang-band',
    name: 'BINTANG BAND',
    role: {
      id: 'Grup Band',
      en: 'Music Band'
    },
    description: {
      id: 'Grup musik unggulan dari Music Bintang Production. Menghadirkan warna pop-rock alternatif dengan lirik puitis dan aransemen yang dinamis.',
      en: 'The flagship music group from Music Bintang Production. Delivering alternative pop-rock colors with poetic lyrics and dynamic arrangements.'
    }
  },

  {
    id: 'bintang-putra-sugiatno',
    name: 'BINTANG PUTRA SUGIATNO',
    role: {
      id: 'Artis Pop / Produser',
      en: 'Pop Artist / Producer'
    },
    description: {
      id: 'Putra dari Bapak Heru yang juga merintis karir sebagai artis unggulan di label MBP. Bintang adalah motor kreatif yang gemar mengeksplorasi genre pop modern dan elektronik dalam setiap rilisannya.',
      en: 'Son of Mr. Heru who also pioneers a career as a flagship artist in the MBP label. Bintang is a creative engine who loves to explore modern pop and electronic genres in his releases.'
    },
    image: '/images/bintangputrasugiatno.jpg'
  },
  {
    id: 'adel',
    name: 'ADELITA JULYS',
    role: {
      id: 'Penyanyi & Penulis Lagu',
      en: 'Singer-Songwriter'
    },
    description: {
      id: 'Artis berbakat dengan warna vokal yang khas dan emosional. Adel membawa nuansa segar ke dalam industri musik dengan lagu-lagu pop akustik yang menyentuh hati.',
      en: 'A talented artist with a distinct and emotional vocal tone. Adel brings a fresh nuance to the music industry with acoustic pop songs that touch the heart.'
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
    }
  }
];
