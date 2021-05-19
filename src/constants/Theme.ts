const palette = {
  red: "#CD0E61",
  black: "#0B0B0B",
  gray900: "#212121",
  gray600: "#757575",
  gray50: "#FAFAFA",
  white: "#F0F2F3",
};

const light = {
  colors: {
    primary: palette.gray900,
    primaryVariant: palette.gray900,
    onPrimary: palette.white,

    secondary: palette.gray600,
    secondaryVariant: palette.gray600,
    onSecondary: palette.gray50,

    background: palette.gray50,
    onBackground: palette.black,

    surface: palette.white,
    onSurface: palette.gray900,

    error: palette.red,
    onError: palette.white,

    shadow: palette.black,
  },
  borderRadius: 4,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  margin: {
    vertical: 20,
    horizontal: 20,
  },
  textVariants: {
    heading1: {
      fontSize: 32,
      fontWeight: "700",
    },
    heading2: {
      fontSize: 28,
      fontWeight: "400",
    },
    heading3: {
      fontSize: 22,
      fontWeight: "400",
    },
    heading4: {
      fontSize: 20,
      fontWeight: "400",
    },
    body: {
      fontSize: 17,
      fontWeight: "400",
    },
    caption1: {
      fontSize: 15,
      fontWeight: "400",
    },
    caption2: {
      fontSize: 13,
      fontWeight: "400",
    },
    kicker: {
      fontSize: 12,
      fontWeight: "400",
      textTransform: "uppercase",
    },
  },
} as const;

const dark = {
  ...light,
  colors: {
    ...light.colors,
    primary: palette.gray50,
    primaryVariant: palette.gray50,
    onPrimary: palette.black,

    secondary: palette.gray600,
    secondaryVariant: palette.gray600,
    onSecondary: palette.black,

    background: "black",
    onBackground: palette.gray50,

    surface: palette.gray900,
    onSurface: palette.gray50,
  },
};

export default {
  light,
  dark,
};
