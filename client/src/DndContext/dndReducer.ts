export interface State {
  items: any[];
  dragging: boolean;
  hoverIndex: number | null;
}

export type Action =
  | { type: "DRAG_START"; dragIndex: number }
  | { type: "DRAG_STOP"; from: number }
  | { type: "HOVER"; hoverIndex: number }
  | { type: "HOVER_STOP" };

export const initialState = {
  items: [
    {
      id: "001"
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  dragging: false,
  hoverIndex: null
};

export const dndReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "DRAG_START": {
      const { dragIndex } = action;
      return {
        ...state,
        dragging: true,
        hoverIndex: dragIndex
      };
    }
    case "DRAG_STOP": {
      const { from } = action;
      const { hoverIndex: to } = state;

      if (to === null) {
        return {
          ...state,
          dragging: false,
          hoverIndex: null
        };
      }

      const newItems = [...state.items];
      const [itemToMove] = newItems.splice(from, 1);
      newItems.splice(to, 0, itemToMove);
      return {
        ...state,
        items: newItems,
        dragging: false,
        hoverIndex: null
      };
    }
    case "HOVER": {
      const { hoverIndex } = action;
      return {
        ...state,
        hoverIndex
      };
    }
    case "HOVER_STOP": {
      return {
        ...state,
        hoverIndex: null
      };
    }

    default:
      return state;
  }
};