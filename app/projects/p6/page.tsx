import { Button, Text, Title, Image } from "@mantine/core";
import NextImage from "next/image";
import React from "react";
import b10 from "assets/media/Foto_3.jpg";
import b11 from "assets/media/Foto_2.jpg";
import b12 from "assets/media/Foto_1.jpg";
import b13 from "assets/media/Foto_4.jpg";
import b14 from "assets/media/Foto_5.jpg";

export default function Home() {
  return (
    <div>
      <Title style={{ marginLeft: 20, fontSize: "3.5vw" }}>
        TOOLKIT FOR WEARABLE INTERACTION, 2023 <br />
        _INTERACTION DESIGN
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
        The “ChatterMeter” is a prototype developed using an Arduino microphone
        to measure an individual's speech activity throughout the day. Based on
        the collected data, a social index is calculated to indicate whether a
        person speaks a lot or is rather quiet, spending more time on their
        phone. The project explores the differences between real-life
        communication and that which occurs on social media platforms. Its aim
        is to identify and present the disparities between these two forms of
        communication. It's important to understand how social media impacts our
        communication. My contribution to the project was to conceptualize and
        fabricate the red bag, and I also participated in the programming
        process. <br />
        <br />
        <em>
          The project was made in 2023 with a team partner as part of the course
          "Interaction Design" at the University of Applied Sciences in
          Augsburg.
        </em>
      </Text>
      <br />
      <Image
        component={NextImage}
        src={b10}
        alt="interaction_1"
        fit="contain"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <Image
        component={NextImage}
        src={b12}
        alt="arabic_digital"
        fit="contain"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <Image
        component={NextImage}
        src={b11}
        alt="arabic_digital"
        fit="contain"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <Image
        component={NextImage}
        src={b13}
        alt="arabic_digital"
        fit="contain"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <Image
        component={NextImage}
        src={b14}
        alt="arabic_digital"
        fit="contain"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      ></Image>
      <br />
      <br />
      <br />
    </div>
  );
}
