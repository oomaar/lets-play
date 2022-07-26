import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../app/store";
import type { AppProps } from "next/app";
import { Navbar } from "../components";
import { GlobalStyle, theme } from "../global/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
