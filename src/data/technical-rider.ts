import { TechnicalRider } from '@/types';

export const technicalRider: TechnicalRider = {
  channels: [
    { name: 'DRUM', channels: 8, equipment: '-' },
    { name: 'BASS', channels: 1, equipment: 'DI Box' },
    { name: 'GUITAR', channels: 1, equipment: 'DI Box' },
    { name: 'KEYBOARD SYNTH', channels: 2, equipment: 'DI Box × 2' },
    { name: 'KEYBOARD RD 700', channels: 2, equipment: 'DI Box × 2' },
    { name: 'SEQUENCER', channels: 2, equipment: 'DI Box × 2' },
    { name: 'KLIK', channels: 1, equipment: '-' },
    { name: 'VOCAL YAMO', channels: 1, equipment: 'Dynamic / Wireless' },
    { name: 'VOCAL ADELITA', channels: 1, equipment: 'Dynamic / Wireless' },
    { name: 'VOCAL BINTANG', channels: 1, equipment: 'Dynamic Mic' },
    { name: 'TALK BACK', channels: 2, equipment: 'Dynamic Mic' }
  ],
  monitors: [
    { name: 'Vocal Yamo', channels: 1, monitor: 'In Ear Monitor' },
    { name: 'Vocal Adelita', channels: 1, monitor: 'In Ear Monitor' },
    { name: 'Drum', channels: 1, monitor: 'In Ear Monitor' },
    { name: 'Bass', channels: 1, monitor: 'In Ear Monitor' },
    { name: 'Guitar', channels: 1, monitor: 'In Ear Monitor' },
    { name: 'Keyboard', channels: 1, monitor: 'In Ear Monitor' }
  ],
  equipments: [
    { name: 'Drum Set Tama / Yamaha', quantity: 1 },
    { name: 'Keyboard Roland RD 700', quantity: 1 },
    { name: 'Stand Mic', quantity: 6 },
    { name: 'Stand Keyboard Double', quantity: 1 },
    { name: 'Stand Keyboard Single', quantity: 1 },
    { name: 'Stand Guitar', quantity: 2 },
    { name: 'Stand Book', quantity: 1 }
  ]
};