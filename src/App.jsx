import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Features } from "./components/Features/Features";
import { Gastronomy } from "./components/Gastronomy/Gastronomy";
import { Gallery } from "./components/Gallery/Gallery";
import { DrinksBanner } from "./components/DrinksBanner/DrinksBanner";
import { Footer } from "./components/Footer/Footer";
import { Partners } from "./components/Partners/Partners";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Home />
        <Features />
        <Gastronomy />
        <Gallery />
        <DrinksBanner />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
