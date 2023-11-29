"use client";

import { Button, Image, Grid, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Grid>
        <Grid.Col>
          {" "}
          <Title size="3.5vw">Work</Title>
          <Text size="3vw" fs="italic">
            In the following you will find some of the projects that I have done
            since October 2020
            <br />
            <br />
          </Text>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col
          span={{ base: 12, md: 12, sm: 16 }}
          style={{
            textDecoration: "none",
            fontSize: "4.95vw",
            lineHeight: 0.9,
            color: "black",
          }}
        >
          {" "}
          <Link
            href="/projects/p1"
            style={{ textDecoration: "none", color: "black" }}
          >
            _The Art of Creating Music
          </Link>
          <br />
          <Link
            href="/projects/p2"
            style={{ textDecoration: "none", color: "black" }}
          >
            _The Mindful Designer
          </Link>
          <br />
          <Link
            href="/projects/p3"
            style={{ textDecoration: "none", color: "black" }}
          >
            _“G” for the Faculty of Design
          </Link>
          <br />
          <Link
            href="/projects/p4"
            style={{ textDecoration: "none", color: "black" }}
          >
            _Arabic Typography
          </Link>
          <br />
          <Link
            href="/projects/p5"
            style={{ textDecoration: "none", color: "black" }}
          >
            _AUX Film
          </Link>
          <br />
          <Link
            href="/projects/p6"
            style={{ textDecoration: "none", color: "black" }}
          >
            _Toolkit for Wearable Interaction
          </Link>
        </Grid.Col>
      </Grid>
    </div>
  );
}
