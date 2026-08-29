export type Company = {
  name: string;
  tagline: string;
  vision: string;
  mission: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};

export type Service = {
  id: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  items: { id: string; en: string }[];
};

export type Artist = {
  id: string;
  name: string;
  role: { id: string; en: string }; // e.g., "Singer-Songwriter", "Band"
  description: { id: string; en: string };
  image?: string; // Optional image path
};

export type MusicWork = {
  id: string;
  title: string;
  artistId: string; // Relation to Artist
  artistName: string; // Display name
  description: { id: string; en: string };
  coverImage?: string; // Album art
  youtubeId?: string; // Optional main video
  links: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    joox?: string;
  };
};

export type Activity = {
  id: string;
  title: { id: string; en: string };
  image: string;
  size: 'small' | 'large';
};

export type TechnicalRiderChannel = {
  name: string;
  channels: number;
  equipment: string;
};

export type MonitorOutput = {
  name: string;
  channels: number;
  monitor: string;
};

export type Equipment = {
  name: string;
  quantity: number;
};

export type TechnicalRider = {
  channels: TechnicalRiderChannel[];
  monitors: MonitorOutput[];
  equipments: Equipment[];
};
