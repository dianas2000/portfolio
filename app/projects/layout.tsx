"use client";

import MyNavBar from "@/components/MyNavBar";
import { Group, Stack } from "@mantine/core";
import "@mantine/carousel";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <Stack>
      <MyNavBar href={pathname === "/projects" ? "/" : "/projects"} />
      {children}
    </Stack>
  );
};

export default Layout;
