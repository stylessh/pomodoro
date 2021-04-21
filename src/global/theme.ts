import { ITheme } from "../react-app-env";

const theme: ITheme = {
  accent: localStorage.getItem("accent") || "#F82A56",

  white: "#f0f0f0",
};

export default theme;
