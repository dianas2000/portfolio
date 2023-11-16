import { Button, Text, Title } from "@mantine/core";
import { link } from "fs";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* <Link href="/">Back to MainPage</Link> */}
      <Title style={{ marginLeft: 20, fontSize: "10vw" }}>CONTACT ME</Title>
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2.75vw",
          textAlign: "justify",
          marginRight: 20,
        }}
      >
        <a
          href="mailto:dianamaria.stirbu@hs-augsburg.de"
          style={{ color: "black" }}
        >
          dianamaria.stirbu@hs-augsburg.de
        </a>
        <br />
        <a href="mailto:didistirbu2000@gmail.com" style={{ color: "black" }}>
          didistirbu2000@gmail.com
        </a>
      </Text>
    </div>
  );
}
