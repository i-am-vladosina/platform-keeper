export const config: Config = {
  game: {
    platform: {
      width: 100,
      height: 20,
      fillColor: 0xff0000,
    },
    ball: {
      radius: 20,
      fillColor: 0xffffff,
    },
    field: {
      width: 200,
      height: 30,
      fillColor: 0xef23ee,
      strokeColor: 0x12f132,
      lineWidth: 4,
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
    field: {
      width: number;
      height: number;
      fillColor: number;
      strokeColor: number;
      lineWidth: number;
    };
  }>;
}>;
