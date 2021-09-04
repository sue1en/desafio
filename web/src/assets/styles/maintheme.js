import { createTheme } from "@material-ui/core/styles";

const mainTheme = createTheme({
  palette:{
    primary:{
      main:"#48144F",
      dark:"#420A49",
      light:"#B757C2",
    },
    secondary: {
      main: '#ED4D77',
      light: 'rgba(237, 77, 119, 0.4)',
    },
    background: {
      default: "#F4F4F4",
    },
    imgbackground: {
      main: '#F4F4F4',
    },
  },
  typography:{
    fontFamily:"sans-serif",
  },
});

export default mainTheme;