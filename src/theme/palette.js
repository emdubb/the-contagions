import colors from './colors';

export default {
  primary: {
    main: colors.teal,
  },
  secondary: {
    main: colors.lightBlue,
  },
  error: {
    main: colors.red,
  },
  success: {
    main: colors.green,
  },
  background: {
    default: colors.backgroundGray,
    header: colors.white,
  },
  divider: colors.divider,
  common: {
    ...colors,
  },
};
