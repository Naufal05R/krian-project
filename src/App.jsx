import { createTheme, ThemeProvider } from "@mui/material";
import { Navbar, Hero, About, Activity, Shared, Footer } from "./components";

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
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 28,
          fontSize: 14,
          fontWeight: 700,
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
      <div className="relative z-0 overflow-hidden bg-white">
        <div className="blue-gradient bg-cover bg-no-repeat bg-center text-black-200">
          <Navbar />
          <Hero />
        </div>
        <div className="absolute right-[-147.5px] top-[1069.96px] -z-30 h-60 w-60 bg-about-ornament" />
        <div className="absolute left-[-152.5px] top-[1310.04px] -z-30 h-60 w-60 bg-about-ornament" />
        <About />
        <Activity />
        <Shared />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
