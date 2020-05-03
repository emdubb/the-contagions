import { produce } from 'immer';

export const createReducer = (handlers) =>
  produce((draft, { type, payload }) => {
    const handler = handlers[type];
    if (handler) {
      handler(draft, payload);
    }
  });
