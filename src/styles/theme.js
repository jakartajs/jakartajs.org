const pallette = {
  white: '#fff',
  grey100: '#f8f9fa',
  grey200: '#e9ecef',
  grey300: '#dee2e6',
  grey400: '#ced4da',
  grey500: '#adb5bd',
  grey600: '#6c757d',
  grey700: '#495057',
  grey800: '#343a40',
  grey900: '#212529',
  black: '#000',
  brand: {
    purple: '#d884bc',
    blue: '#70cee2',
    yellow: '#f3df49',
    red: '#eb5558',
    green: '#9ee79a',
  },
};

const theme = {
  pallette,
  colors: {
    background: pallette.grey200,
    body: pallette.grey700,
    heading: pallette.grey900,
    border: pallette.gray5,
    brand: pallette.brand.red,
    yellow: pallette.brand.yellow,
    green: pallette.brand.green,
  },
  /* eslint-disable max-len */
  fonts: {
    sansSerif:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', Times, serif",
    monospace: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace, monospace",
  },
  /* eslint-enable max-len */
  emSizes: {
    fontSizes: {
      h1: 2.441,
      h2: 1.953,
      h3: 1.563,
      h4: 1.25,
    },
    containerPadding: 1,
    lineHeight: {
      body: 1.45,
      heading: 1.2,
    },
  },
  pxSizes: {
    fontSizes: {
      md: 16,
      lg: 18,
    },
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
    widths: {
      md: 720,
      lg: 960,
      xl: 1140,
    },
    heights: {
      header: 60,
    },
  },
};

export default theme;
