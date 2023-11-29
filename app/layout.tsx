import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
  ColorSchemeScript,
} from "@mantine/core";
import { ReactNode } from "react";
import MyAppShell from "./AppShell";

export const metadata = {
  title: "Diana Maria Stirbu",
  description: "Portfolio 2023",
};

interface Props {
  children: ReactNode;
}

const primary: MantineColorsTuple = [
  "#ffe9ff",
  "#fed1fd",
  "#faa1f7",
  "#f66ef1",
  "#f243eb",
  "#f028e8",
  "#f018e8",
  "#d609cf",
  "#bf00b9",
  "#a700a1",
];

const theme = createTheme({
  defaultRadius: "xl",
  primaryColor: "primary",
  colors: {
    primary,
  },
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MyAppShell>{children}</MyAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
