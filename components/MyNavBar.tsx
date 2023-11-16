import { ActionIcon, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const MyNavBar = ({ href }: any) => {
  return (
    <Group h={60} w="10%">
      <ActionIcon component={Link} href={href}>
        <IconChevronLeft size={16} />
      </ActionIcon>
    </Group>
  );
};

export default MyNavBar;
