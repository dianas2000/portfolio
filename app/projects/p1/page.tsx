"use client";

import { Button, Text, Title, Image } from "@mantine/core";
import b1 from "assets/media/pictogramms.jpg";
import NextImage from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <Title style={{ marginLeft: 20, fontSize: "3.5vw" }}>
        THE ART OF CREATING MUSIC, 2020 <br />
        _GRAPHIC DESIGN
      </Title>
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2vw",
          textAlign: "justify",
          marginRight: 20,
          marginTop: 20,
        }}
      >
        This was my very first assignment since I started studying. Because I
        like electronic music, I decided to design some pictograms for producing
        music. <br />
        The goal was to design pictograms on a topic that interests us. I was
        inspired by my own equipment for making music. Moreover, the selection
        of colors was influenced by my inclination towards electronic music.{" "}
        <br />
      </Text>
      <Image
        component={NextImage}
        src={b1}
        alt="project_1_pictograms"
        fit="contain"
        radius="md"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2vw",
          textAlign: "justify",
          marginRight: 20,
          marginTop: 10,
          fontStyle: "italic",
        }}
      >
        The pictograms were created in 2020 as part of the course “Visual
        Design” at the University of Applied Sciences in Augsburg.
      </Text>
    </div>
  );
}
