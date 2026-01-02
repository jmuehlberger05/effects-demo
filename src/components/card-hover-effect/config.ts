export type TransformType = {
  scale: number;
  tx: number;
  ty: number;
  rotate: number;
};

export const initialPositions: (TransformType & { z: number; from: number })[] =
  [
    { scale: 0.85, tx: 15, ty: 28, rotate: -21, z: 7, from: 250 },
    { scale: 0.9, tx: 7, ty: 12, rotate: -14, z: 8, from: 200 },
    { scale: 0.95, tx: 0, ty: 3, rotate: -7, z: 9, from: 150 },
    { scale: 1, tx: 0, ty: 0, rotate: 0, z: 10, from: 0 },
    { scale: 0.95, tx: 0, ty: 3, rotate: 7, z: 9, from: -150 },
    { scale: 0.9, tx: -7, ty: 12, rotate: 14, z: 8, from: -200 },
    { scale: 0.85, tx: -15, ty: 28, rotate: 21, z: 7, from: -250 },
  ];

export const hoverPositions: {
  [key: number]: (TransformType & { delay: number })[];
} = {
  0: [
    { tx: 2, ty: -20, scale: 1, rotate: 0, delay: 0 },
    { tx: 70, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: 80, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: 80, ty: 0, scale: 1, rotate: 0, delay: 0.06 },
    { tx: 60, ty: 0, scale: 1, rotate: 0, delay: 0.08 },
    { tx: 40, ty: 0, scale: 1, rotate: 0, delay: 0.1 },
    { tx: -2, ty: 0, scale: 1, rotate: 1, delay: 0.12 },
  ],
  1: [
    { tx: 2, ty: 0, scale: 1, rotate: -2, delay: 0.02 },
    { tx: 0, ty: -20, scale: 1, rotate: 0, delay: 0.0 },
    { tx: 60, ty: 0, scale: 1.02, rotate: 0, delay: 0.02 },
    { tx: 100, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: 80, ty: 0, scale: 1, rotate: 0, delay: 0.06 },
    { tx: 40, ty: 0, scale: 1, rotate: 0, delay: 0.08 },
    { tx: -2, ty: 0, scale: 1, rotate: 1, delay: 0.1 },
  ],
  2: [
    { tx: 2, ty: 0, scale: 1, rotate: -1, delay: 0.04 },
    { tx: -20, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: 0, ty: -20, scale: 1.05, rotate: 0, delay: 0 },
    { tx: 90, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: 70, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: 30, ty: 0, scale: 1, rotate: 0, delay: 0.06 },
    { tx: -2, ty: 0, scale: 1, rotate: 1, delay: 0.08 },
  ],
  // Center
  3: [
    { tx: 2, ty: 0, scale: 1, rotate: -1, delay: 0.06 },
    { tx: -40, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: -80, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: 0, ty: -20, scale: 1.1, rotate: 0, delay: 0 },
    { tx: 80, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: 40, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: -2, ty: 0, scale: 1, rotate: 1, delay: 0.06 },
  ],
  4: [
    { tx: 2, ty: 0, scale: 1, rotate: -1, delay: 0.08 },
    { tx: -30, ty: 0, scale: 1, rotate: 0, delay: 0.06 },
    { tx: -70, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: -90, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: 0, ty: -20, scale: 1.05, rotate: 0, delay: 0 },
    { tx: 20, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: -2, ty: 0, scale: 1, rotate: 1, delay: 0.04 },
  ],
  5: [
    { tx: 2, ty: 0, scale: 1, rotate: -1, delay: 0.1 },
    { tx: -40, ty: 0, scale: 1, rotate: 0, delay: 0.08 },
    { tx: -80, ty: 0, scale: 1, rotate: 0, delay: 0.06 },
    { tx: -100, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: -60, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: 0, ty: -20, scale: 1.02, rotate: 0, delay: 0 },
    { tx: -2, ty: 0, scale: 1, rotate: -2, delay: 0.02 },
  ],
  6: [
    { tx: 2, ty: 0, scale: 1, rotate: -1, delay: 0.12 },
    { tx: -40, ty: 0, scale: 1, rotate: 0, delay: 0.1 },
    { tx: -60, ty: 0, scale: 1, rotate: 0, delay: 0.08 },
    { tx: -80, ty: 0, scale: 1, rotate: 0, delay: 0.06 },
    { tx: -80, ty: 0, scale: 1, rotate: 0, delay: 0.04 },
    { tx: -70, ty: 0, scale: 1, rotate: 0, delay: 0.02 },
    { tx: -2, ty: -20, scale: 1, rotate: 0, delay: 0 },
  ],
};
