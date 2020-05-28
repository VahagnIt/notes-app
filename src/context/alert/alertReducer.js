import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, { payload }) => ({
    ...state,
    ...payload,
    visible: true,
  }),
  [HIDE_ALERT]: (state) => ({
    ...state,
    visible: false,
  }),
  Default: (state) => state,
};

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.Default;
  return handle(state, action);
};
