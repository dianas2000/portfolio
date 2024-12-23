"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, AppShellHeader, Burger, NavLink } from "@mantine/core";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

function MyAppShell({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();

  const pathname = usePathname();

  return (
    <AppShell padding="md" h="100%" withBorder={false}>
      <AppShell.Main h="100%">{children}</AppShell.Main>

      <AppShell.Footer>
        <div style={{ padding: 15, fontSize: 12 }}>
          Diana Maria Stirbu / 2024
        </div>
      </AppShell.Footer>
    </AppShell>
  );
}

export default MyAppShell;
