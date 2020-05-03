import { createMuiTheme } from '@material-ui/core/styles';
import { mergeOptions } from './utils';
import colors from './colors';
import palette from './palette';
import typography from './typography';
import baseButtonOptions from './baseButtonOptions';

const baseOptions = {
  palette,
  typography,
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: colors.white,
      },
      colorDefault: {
        backgroundColor: colors.white,
      },
    },
    MuiContainer: {
      maxWidthSm: {
        maxWidth: 800,
      },
      maxWidthLg: {
        paddingLeft: 8,
        paddingRight: 8,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: '0.875rem',
      },
      input: {
        height: 20,
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 14px) scale(1)',
        '&[class*=MuiInputLabel-shrink]': {
          transform: 'translate(14px, -8px) scale(0.857142857142857)',
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: 14,
      },
    },
    MuiAutocomplete: {
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          padding: 8,
          '& [class*="MuiAutocomplete-input"]': {
            padding: '6px 4px',
          },
        },
      },
      option: {
        lineHeight: 1.2,
        paddingTop: 14,
        paddingBottom: 15,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: colors.purple,
      },
    },
    MuiTab: {
      root: {
        fontSize: 32,
        fontWeight: 400,
        textTransform: 'inherit',
      },
      textColorInherit: {
        '&$selected': {
          color: colors.purple,
        },
      },
    },
    MuiTypography: {
      colorError: {
        color: colors.red,
      },
    },
    MuiSkeleton: {
      text: {
        marginTop: '0.2em',
        marginBottom: '0.2em',
        marginRight: 8,
      },
    },
    MuiTooltip: {
      arrow: {
        color: colors.black,
      },
      tooltip: {
        backgroundColor: colors.black,
      },
    },
  },
};

export const options = mergeOptions(baseOptions, baseButtonOptions);

export default createMuiTheme(options);
