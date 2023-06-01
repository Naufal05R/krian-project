import { createTheme, ThemeProvider } from "@mui/material";
import {
  Navbar,
  Hero,
  About,
  Activity,
  // Documentation,
  Shared,
  Footer,
} from "./components";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#0ea5e9",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          fontSize: 12,
          fontWeight: 700,
          boxShadow: "none",
          padding: "12px 24px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="relative z-0 overflow-clip bg-white">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Activity />
        {/* <Documentation /> */}
        <Shared />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
