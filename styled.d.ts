import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bodyColor: string;
      primary: string;
      secondary: string;
      textColor: string;
      titleColor: string;
      containerColor: string;
    };
  }
}
