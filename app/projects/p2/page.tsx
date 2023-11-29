import { Button, Text, Title, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import React from "react";
import NextImage from "next/image";
import b2 from "assets/media/md-4.png";
import b3 from "assets/media/md-3.png";
import b4 from "assets/media/md-6.png";
import b5 from "assets/media/md-7.png";
import b6 from "assets/media/md-8.png";

export default function Home() {
  return (
    <div>
      <Title style={{ marginLeft: 20, fontSize: "3.5vw" }}>
        THE MINDFUL DESIGNER, 2021 <br />
        _EDITORIAL DESIGN
      </Title>
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2vw",
          textAlign: "justify",
          marginRight: 20,
          marginTop: 20,
          marginDown: 30,
        }}
      >
        The project is about a small book that leads you to being a more mindful
        designer. The small guide consists of an introduction, some meditations,
        and exercises that will help you become more mindful in your design. The
        drawings and all the texts have been authored and crafted by myself.{" "}
        <br />
        <br />
      </Text>
      <Image
        component={NextImage}
        src={b3}
        alt="project_2_md-3"
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
          marginTop: 20,
          marginDown: 30,
        }}
      >
        <br />
        These days, its more and more important to take a minute for yourself
        and stay calm and relaxed. The aim is to do everything mindfully. <br />
        <br />
      </Text>
      <br />
      <Image
        component={NextImage}
        src={b4}
        alt="project_2_md-4"
        fit="contain"
        radius="md"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <br />
      <Image
        component={NextImage}
        src={b5}
        alt="project_2_md-5"
        fit="contain"
        radius="md"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <br />
      <br />
      <Image
        component={NextImage}
        src={b6}
        alt="project_2_md-6"
        fit="contain"
        radius="md"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <br />
      <br />
      <Image
        component={NextImage}
        src={b2}
        alt="project_2_md-2"
        fit="contain"
        radius="md"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <br />
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2vw",
          textAlign: "justify",
          marginRight: 20,
          fontStyle: "italic",
        }}
      >
        This publication was created in 2021 as part of the editorial design
        workshop at the University of Applied Sciences in Augsburg.
      </Text>
      <br />
      <br />
    </div>
  );
}
