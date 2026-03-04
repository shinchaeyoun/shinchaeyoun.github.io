import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import theme from "./styles/theme.jsx";
import media from "./styles/media.jsx";
import App from "./App.jsx";
import Frame from "./components/Frame.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={{ ...theme, ...media }}>
      <GlobalStyle />
      <Frame />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
