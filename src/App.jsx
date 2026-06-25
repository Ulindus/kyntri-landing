import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MposPage from "./pages/MposPage";
import EventFlowPage from "./pages/EventFlowPage";
import GaragePage from "./pages/GaragePage";
import AgenticAiPage from "./pages/AgenticAiPage";
import Marquee from "./components/Marquee";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/mpos" element={<MposPage />} />

        <Route
          path="/eventflow"
          element={<EventFlowPage />}
        />

        <Route
          path="/garage"
          element={<GaragePage />}
        />

        <Route
          path="/agentic-ai"
          element={<AgenticAiPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;