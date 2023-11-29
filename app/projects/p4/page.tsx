import { Button, Text, Title, Image } from "@mantine/core";
import React from "react";
import NextImage from "next/image";
import b8 from "assets/media/Analog_Diana_Stirbu-1.png";
import b9 from "assets/media/Digital_Diana_Stirbu-1.png";

export default function Home() {
  return (
    <div>
      <Title style={{ marginLeft: 20, fontSize: "3.5vw" }}>
        ARABIC TYPOGRAPHY, 2022 <br />
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
        The project entailed experimenting with calligraphy techniques prevalent
        in the Arabic language and subsequently developing a completely novel
        letter, based solely on a reference from an audio of an existing one.
        The result is that you can see the new letter in both digital and analog
        versions. <br />
        <br />
        <em>
          The workshop was held in 2022 at the University of Applied Sciences in
          Augsburg, Germany, in collaboration with Nada Hesham, a designer from
          Cairo, Egypt.
        </em>
      </Text>
      <br />
      <Image
        component={NextImage}
        src={b8}
        alt="arabic_analog"
        fit="contain"
        radius="md"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <Image
        component={NextImage}
        src={b9}
        alt="arabic_digital"
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
    </div>
  );
}
