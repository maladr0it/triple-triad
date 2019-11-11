// The purpose is to track what you are currently dragging

interface Pos {
  x: number;
  y: number;
}

// TODO: reconsider naming
interface EventLoc {
  id: string;
  index: number;
}

export interface State {
  origin: EventLoc | null; // from what location are we dragging from
  destination: EventLoc | null;
  hoverLoc: EventLoc | null; // what location are we dragging over
  dragId: string | null; // ID of the item being dragged
  dropPos: Pos | null; // screen coords where last item was dropped
  dragging: boolean;
}

export type Action =
  | { type: "DRAG_START"; dragId: string; origin: EventLoc }
  | { type: "DRAG_END"; dropPos: Pos }
  | { type: "HOVER"; hoverLoc: EventLoc }
  | { type: "HOVER_END" };

export const initialState: State = {
  origin: null,
  destination: null,
  hoverLoc: null,
  dropPos: null,
  dragId: null,
  dragging: false,
};

export const dndReducer = (state: State, action: Action) => {
  // console.log(state, action);

  switch (action.type) {
    case "DRAG_START": {
      const { dragId, origin } = action;
      return {
        ...state,
        origin: origin,
        destination: null,
        dropPos: null,
        dragging: true,
        dragId,
      };
    }

    case "DRAG_END": {
      const { dropPos } = action;
      const { hoverLoc } = state;

      return {
        ...state,
        destination: hoverLoc,
        dragging: false,
        hoverLoc: null,
        dropPos,
      };
    }

    case "HOVER": {
      const { hoverLoc } = action;
      return {
        ...state,
        hoverLoc,
      };
    }

    case "HOVER_END": {
      return {
        ...state,
        hoverLoc: null,
      };
    }

    default:
      return state;
  }
};
