import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Features } from "./components/Features/Features";
import { Gastronomy } from "./components/Gastronomy/Gastronomy";
import { Eventos } from "./components/Eventos/Eventos";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Home />
        <Features />
        <Gastronomy />
        <Eventos />
        <Gallery />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
