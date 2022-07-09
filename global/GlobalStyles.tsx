import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    bodyColor: `#222326`,
    textColor: `#8c9496`,
    primary: "#111",
    secondary: "#0070f3",
    titleColor: `#fff`,
    containerColor: `rgba(0, 0, 0, 0.5)`,
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.bodyColor};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  button {
    outline: 0;
    border: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
