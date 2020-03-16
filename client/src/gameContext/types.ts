import { PlayerName } from "../types";

export type BoardState = ({
  id: string;
  player: PlayerName;
} | null)[];

export type HandsState = Record<PlayerName, string[] | null[]>;

export interface State {
  board: BoardState;
  hands: HandsState;
}

export type Action = {
  type: "card_played";
};
