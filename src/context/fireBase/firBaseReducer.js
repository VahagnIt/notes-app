import { SHOW_LOADING, ADD_NOTE, REMOVE_NOTE, GET_NOTES } from "../types";

const handlers = {
  [SHOW_LOADING]: (state) => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payload }) => ({ notes: [...state.notes, payload] }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
  }),
  [GET_NOTES]: (state, { payload }) => {
    return {
      ...state,
      notes: payload,
      loading: false,
    };
  },
  Default: (state) => state,
};

export const fireBaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.Default;
  return handle(state, action);
};
