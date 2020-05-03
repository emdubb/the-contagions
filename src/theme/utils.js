import { createMuiTheme } from '@material-ui/core/styles';
import { produce } from 'immer';

const updateObject = (draft, override) =>
  Object.keys(override).forEach(key => {
    if (override[key] instanceof Object && draft[key] instanceof Object) {
      updateObject(draft[key], override[key]);
    } else {
      draft[key] = override[key];
    }
  });

export const mergeOptions = (base, ...overrides) =>
  produce(base, draft => {
    overrides.forEach(override => {
      updateObject(draft, override);
    });
  });

export const mergeThemes = (base, ...overrides) =>
  createMuiTheme(mergeOptions(base, ...overrides));
