import MyNavBar from "@/components/MyNavBar";
import { Group, Stack } from "@mantine/core";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <Stack>
      <MyNavBar href="/" />
      {children}
    </Stack>
  );
};

export default layout;
