"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {
  SimpleGrid,
  Title,
  Text,
  Grid,
  HoverCard,
  Center,
} from "@mantine/core";

export default function Home() {
  return (
    <Center h="100%" w="100%">
      <Grid>
        <Grid.Col span={{ base: 4, md: 6, sm: 0 }}>
          {" "}
          <Text
            style={{
              marginTop: 30,
              fontWeight: "bold",
              fontSize: "2.5vw",
            }}
          >
            DIANA MARIA STIRBU
          </Text>
          <Text style={{ marginTop: 5, fontSize: "2.5vw" }}>
            Interactive Media Student at the University of Applied Sciences in
            Augsburg
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 6, sm: 12 }}>
          {" "}
          <Link
            href="/projects"
            style={{
              textDecoration: "none",
              fontSize: "11vw",
              lineHeight: 0.9,
              color: "black",
            }}
          >
            WORK
          </Link>
          <br />
          <Link
            href="/about-me"
            style={{
              textDecoration: "none",
              fontSize: "11vw",
              lineHeight: 0.9,
              color: "black",
            }}
          >
            ABOUT
          </Link>
          <br />
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              fontSize: "11vw",
              lineHeight: 0.9,
              color: "black",
            }}
          >
            CONTACT
          </Link>
        </Grid.Col>
      </Grid>
    </Center>
  );
}
