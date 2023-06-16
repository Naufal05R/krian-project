import { Footer, Shared } from "./components";
import { HomePage, DocumentationPage } from "./pages";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="relative z-0 overflow-hidden bg-white">
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
      </Routes>
      <Shared />
      <Footer />
    </div>
  );
};

export default App;
