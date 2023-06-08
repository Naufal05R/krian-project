import { createTheme, ThemeProvider } from "@mui/material";
import { Navbar, Hero, About, Activity, Shared, Footer } from "./components";
import { HomePage, DocumentationPage } from "./pages";
import { Route, Routes } from "react-router";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
