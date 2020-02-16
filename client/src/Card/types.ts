export interface ICard {
  name: string;
  sides: [number, number, number, number];
  image: {
    sheetIndex: number;
    spriteIndex: number;
  };
}
