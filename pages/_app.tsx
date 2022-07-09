import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Navbar } from "../components";
import { GlobalStyle, theme } from "../global/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
