export default {
  overrides: {
    MuiButton: {
      root: {
        minWidth: 80,
        textTransform: 'none',
        padding: '12px 24px',
      },
      sizeSmall: {
        minWidth: 64,
        fontSize: '0.875rem',
      },
      sizeLarge: {
        minWidth: 96,
        fontSize: '0.875rem',
      },
      outlined: {
        padding: '11px 23px',
      },
      contained: {
        boxShadow: '0',
      },
      containedSizeLarge: {
        padding: '16px 24px',
      },
      textSizeLarge: {
        padding: '16px 24px',
      },
      outlinedSizeLarge: {
        padding: '15px 23px',
      },
      containedSizeSmall: {
        padding: '8px 24px',
      },
      textSizeSmall: {
        padding: '8px 24px',
      },
      outlinedSizeSmall: {
        padding: '7px 23px',
      },
    },
  },
};
