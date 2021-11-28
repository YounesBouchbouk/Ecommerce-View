import { createTheme } from "@material-ui/core";

const arcBlue = "#C1DBE3";
const arcGreen = "#C7DFC5";
const arcYellow = "#F6FEAA";

export const theme = createTheme({
    palette: {
        mine :{
          blue: arcBlue,
          Green: arcGreen,
          Yellow: arcBlue,
        },
        common: {
          blue: arcBlue,
          orange: arcGreen
        },
        primary: {
          main: arcBlue
        },
        secondary: {
          main: arcGreen
        }
      },
      typography: {
        tab: {
          fontFamily: "Raleway",
          textTransform: "none",
          fontWeight: 700,
          color: "white",
          fontSize: "1rem"
        },
        estimate: {
          fontFamily: "Pacifico",
          fontSize: "1rem",
          textTransform: "none",
          color: "white"
        },
        h2: {
          fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "2.5rem",
          color: arcBlue,
          lineHeight: 1.5
        },
        h3: {
          fontFamily: "Pacifico",
          fontSize: "2.5rem",
          color: arcBlue
        },
        h4: {
          fontFamily: "Raleway",
          fontSize: "1.75rem",
          color: arcBlue,
          fontWeight: 700
        },
        h6: {
          fontWeight: 500,
          fontFamily: "Raleway",
          color: arcBlue
        },
        subtitle1: {
          fontSize: "1.25rem",
          fontWeight: 300,
          color: arcYellow
        },
        subtitle2: {
          color: "white",
          fontWeight: 300,
          fontSize: "1.25rem"
        },
        body1: {
          fontSize: "1.25rem",
          color: arcYellow,
          fontWeight: 300
        },
        caption: {
          fontSize: "1rem",
          fontWeight: 300,
          color: arcYellow
        },
        learnButton: {
          borderColor: arcBlue,
          borderWidth: 2,
          textTransform: "none",
          color: arcBlue,
          borderRadius: 50,
          fontFamily: "Roboto",
          fontWeight: "bold"
        }
      },
      overrides: {
        MuiInputLabel: {
          root: {
            color: arcBlue,
            fontSize: "1rem"
          }
        },
        MuiInput: {
          root: {
            color: arcYellow,
            fontWeight: 300
          },
          
        }
      }
});