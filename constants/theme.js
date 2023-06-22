const COLORS = {
  primary: "#5a27ef",
  secondary: "#53C6F2",
  tertiary: "#ff3829",

  gray: "#83829A",
  gray2: "#dddddd80",
  lightBlue: "#f1f9ff80",
  lightBGC: "#c9e5fa7D",
  darkBGC: "#c9e5faE6",
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  //task colors
  blue: "#148ae2",
  green: "green",
  orange: "orange",
  red: "red",
  purple: "purple",
  yellow: "yellow",
  brown: "brown",
  black: "black",
};

const FONT = {
  light: "MLight",
  regular: "MRegular",
  medium: "MMedium",
  semibold: "MSemiBold",
  bold: "MBold",
  extrabold: "MExtraBold",
};

const SIZES = {
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  big: 44,
  xBig: 50,
  giant: 100,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
