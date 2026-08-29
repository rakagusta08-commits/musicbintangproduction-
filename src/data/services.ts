import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'produksi-lagu',
    title: {
      id: 'PRODUKSI LAGU',
      en: 'MUSIC PRODUCTION'
    },
    description: {
      id: 'Layanan produksi musik profesional menyeluruh mulai dari konseptualisasi hingga finalisasi audio.',
      en: 'Comprehensive professional music production services from conceptualization to audio finalization.'
    },
    items: [
      { id: 'Penulisan lagu & Aransemen', en: 'Songwriting & Arrangement' },
      { id: 'Rekaman studio', en: 'Studio recording' },
      { id: 'Mixing & Mastering Profesional', en: 'Professional Mixing & Mastering' }
    ]
  },
  {
    id: 'manajemen-artis',
    title: {
      id: 'MANAJEMEN ARTIS',
      en: 'ARTIST MANAGEMENT'
    },
    description: {
      id: 'Dukungan penuh untuk pengembangan karier artis, membantu mereka fokus pada penciptaan karya.',
      en: 'Full support for artist career development, helping them focus on creating art.'
    },
    items: [
      { id: 'Pengembangan karier', en: 'Career development' },
      { id: 'Penjadwalan & Booking', en: 'Scheduling & Booking' },
      { id: 'Strategi personal branding', en: 'Personal branding strategy' }
    ]
  },
  {
    id: 'label-musik',
    title: {
      id: 'LABEL MUSIK',
      en: 'RECORD LABEL'
    },
    description: {
      id: 'Layanan distribusi dan promosi musik terpadu untuk memastikan karya Anda menjangkau audiens yang luas.',
      en: 'Integrated music distribution and promotion services to ensure your work reaches a wide audience.'
    },
    items: [
      { id: 'Distribusi platform digital', en: 'Digital platform distribution' },
      { id: 'Promosi musik', en: 'Music promotion' },
      { id: 'Manajemen hak cipta', en: 'Copyright management' }
    ]
  },
  {
    id: 'konsultasi-kreatif',
    title: {
      id: 'KONSULTASI KREATIF',
      en: 'CREATIVE CONSULTATION'
    },
    description: {
      id: 'Bimbingan strategis untuk artis independen dalam mengarungi dinamika industri musik modern.',
      en: 'Strategic guidance for independent artists navigating the dynamics of the modern music industry.'
    },
    items: [
      { id: 'Bimbingan arah musik', en: 'Musical direction guidance' },
      { id: 'Strategi promosi independen', en: 'Independent promotion strategy' },
      { id: 'Konsultasi rilis karya', en: 'Work release consultation' }
    ]
  }
];