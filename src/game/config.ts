export const config: Config = {
  game: {
    platform: {
      width: 100,
      height: 20,
      fillColor: 0xff0000,
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
  }>;
}>;
