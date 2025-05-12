"use client";
import { ThemeConfig } from "antd";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  neutral: {
    100: "#FFFFFF",
    200: "#F2F2F8",
    300: "#E4E4ED",
    400: "#CFD1E2",
    500: "#AEB0C5",
    600: "#797C97",
    700: "#4A4E6D",
    800: "#323659",
    900: "#0E133C",
  },
  primary: {
    100: "#F2F6FF",
    200: "#E6EDFF",
    300: "#B8C7FF",
    400: "#6678FC",
    500: "#243DFB",
    600: "#0116AB",
    700: "#03117A",
  },
  secondary: {
    100: "#FCF6FF",
    200: "#F6E2FF",
    300: "#E19FFF",
    400: "#CE6FFB",
    500: "#BB4EEE",
    600: "#9B36CA",
    700: "#7D18AC",
  },
  warning: {
    100: "#FFF9EC",
    200: "#FFF0D2",
    300: "#FADB9E",
    400: "#FAC65E",
    500: "#FEAE0D",
    600: "#E38D0C",
    700: "#BB6500",
  },
  error: {
    100: "#FFF7F6",
    200: "#FEEDEC",
    300: "#FDCCC8",
    400: "#F4958F",
    500: "#F0473E",
    600: "#C81F16",
    700: "#9B0000",
  },
  success: {
    100: "#F6FFFB",
    200: "#D6F8E8",
    300: "#9FE5C4",
    400: "#6CD9AB",
    500: "#52BB8F",
    600: "#349D71",
    700: "#167F53",
  },
};

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#243DFB",
    colorError: "#F0473E",
    colorSuccess: "#52BB8F",
    colorWarning: "#FEAE0D",
    colorInfo: "#BB4EEE",
    colorTextBase: "#0E133C",
    colorBgLayout: "#F2F6FF",
    borderRadius: 4,
  },
  components: {
    Typography: {
      colorLink: "#243DFB",
      colorLinkHover: "#243DFB",
      colorLinkActive: "#243DFB",
      fontSizeHeading1: 32,
      fontSizeHeading2: 28,
      fontSizeHeading3: 24,
      fontSizeHeading4: 20,
      fontSizeHeading5: 16,
      fontSizeXL: 54,
      fontSizeLG: 44,
      fontSizeSM: 12,
      fontSize: 14,
      fontWeightStrong: 500,
    },
    Button: {
      colorLink: "#243DFB",
    },
    Table: {
      headerBg: "#E6EDFF",
      headerColor: "#0E133C",
      headerSplitColor: "#E6EDFF",
      headerSortHoverBg: "#F2F6FF",
      headerFilterHoverBg: "#F2F6FF",
    },
    Input: {
      activeBorderColor: "#243DFB",
      colorBorder: colors.neutral[400],
      colorBgContainerDisabled: colors.neutral[200],
      colorTextDisabled: colors.neutral[700],
    },
    Switch: {
      colorPrimary: "#349D71",
      colorPrimaryHover: "#349D71",
      colorPrimaryActive: "#349D71",
    },
    Menu: {
      colorText: colors.neutral[800],
    },
    Select: {
      colorBgContainerDisabled: colors.neutral[200],
      colorTextDisabled: colors.neutral[700],
      colorTextPlaceholder: colors.neutral[600],
      colorBorder: colors.neutral[400],
    },
  },
};

export default themeConfig;
