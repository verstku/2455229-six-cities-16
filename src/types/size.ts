export type Size = 'small' | 'medium' | 'large';

export type ImageSize = {
  width: string;
  height: string;
};

export type ComponentForImage = 'offer' | 'logo' | 'bookmark';

export type AllSizesOfTheImage = {
  [size in Size]?: ImageSize;
};

export type AllSizesOfAllImages = {
  [component in ComponentForImage]: AllSizesOfTheImage;
};
