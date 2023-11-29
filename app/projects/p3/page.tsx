import { Button, Text, Title, Image } from "@mantine/core";
import React from "react";
import NextImage from "next/image";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import b7 from "assets/media/logo.png";
import b13 from "assets/media/logo-hell.png";
import b14 from "assets/media/logo-dark.png";
import b15 from "assets/media/logo_all.png";
import Link from "next/link";

const images = [
  {
    image: "assets/media/logo.png",
    title: "Best forests to visit in North America",
    category: "nature",
  },
];

export default function Home() {
  return (
    <div>
      <Title style={{ marginLeft: 20, fontSize: "3.5vw" }}>
        “G” FOR THE FACULTY OF DESIGN, 2022 <br />
        _LOGO DESIGN & 2D ANIMATION
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
        The subsequent task involved the creation of a logo and an animated
        movie for the University of Design (in German: Fakultät für Gestaltung).
        It was the main goal to rebrand the logo, which should represent our
        faculty of design. The decision was to choose an organic form in the
        colors of the faculty, as well designing the handwritten “G”. <br />
      </Text>
      <br />
      <Image
        component={NextImage}
        src={b15}
        alt="arabic_analog"
        fit="contain"
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
        src={b13}
        alt="arabic_analog"
        fit="contain"
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
        src={b14}
        alt="arabic_analog"
        fit="contain"
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
        }}
      >
        <br />
        Additionally, the project involved animating the logo in different
        lengths. By clicking on the ensuing hyperlink, one can access the
        outcomes of the Animated Movies.
        <br />
        <br />
        <Link href="https://cloud.hs-augsburg.de/s/cPLY5Ze9RegGaNj">
          View the videos
        </Link>
        <br />
        <br />
        <em>
          The project was made in 2022 with a team partner as part of the course
          "Motion Graphics" at the University of Applied Sciences in Augsburg.
        </em>
      </Text>
      <br />
      <br />
      <br />
    </div>
  );
}
