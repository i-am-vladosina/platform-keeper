export const config: Config = {
  game: {
    platform: {
      width: 100,
      height: 20,
      fillColor: 0xff0000,
    },
    ball: {
      radius: 90,
      fillColor: 0xfe23ee,
    },
  },
};

export type Config = Readonly<{
  game: Readonly<{
    platform: {
      width: number;
      height: number;
      fillColor: number;
    };
    ball: {
      radius: number;
      fillColor: number;
    };
  }>;
}>;
