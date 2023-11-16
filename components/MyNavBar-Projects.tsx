import { ActionIcon, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

const MyNavBarProjects = () => {
  return (
    <Group h={60} w="10%">
      <ActionIcon component={Link} href="/projects">
        <IconChevronLeft size={16} />
      </ActionIcon>
    </Group>
  );
};

export default MyNavBarProjects;
