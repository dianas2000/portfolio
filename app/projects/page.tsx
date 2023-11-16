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
            In the following you will find projects that I have done since
            October 2020
            <br />
            <br />
          </Text>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col
          span={{ base: 8, md: 12, sm: 16 }}
          style={{
            textDecoration: "none",
            fontSize: "6vw",
            lineHeight: 0.9,
            color: "black",
            marginTop: 15,
          }}
        >
          {" "}
          <Link
            href="/projects/graphicdesign"
            style={{ textDecoration: "none", color: "black" }}
          >
            GRAPHIC DESIGN
          </Link>
          <br />
          <Link
            href="/projects/audiovisualdesign"
            style={{ textDecoration: "none", color: "black" }}
          >
            AUDIOVISUAL DESIGN
          </Link>
          <br />
          <Link
            href="/projects/webdesign"
            style={{ textDecoration: "none", color: "black" }}
          >
            WEBDESIGN & WEB DEVELOPMENT
          </Link>
          <br />
          <Link
            href="/projects/webdesign"
            style={{ textDecoration: "none", color: "black" }}
          >
            INTERACTION DESIGN
          </Link>
        </Grid.Col>
      </Grid>
    </div>
  );
}
