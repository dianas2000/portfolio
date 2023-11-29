import { Button, Text, Title, Image } from "@mantine/core";
import Link from "next/link";
import b12 from "assets/media/Slogan.png";
import NextImage from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <Title style={{ marginLeft: 20, fontSize: "3.5vw" }}>
        AUX FILM, 2022 <br />
        _AUDIOVISUAL DESIGN
      </Title>
      <br />
      <Image
        component={NextImage}
        src={b12}
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
        The promotional film 'Augsburg - Home with a Future' is a classic,
        humorous piece that delves into sustainability and future viability. The
        chosen themes are relevant and impactful for everyone, making our film
        appealing to a broad audience. It was created as part of the course
        'Aux_Heimatfilm?' at Augsburg University on behalf of Region A3. Our
        collaborators include POW WOW Café, Solarpark Gersthofen, Moirhof Farm
        Shop, rutaNatur, the Office for Green Planning, the Gebrüder Maier
        construction site in Rehling, and Stadtmarkt (owned by Maria Schuster).
        Additionally, video material was provided to us by em-foto.de (Eckhart
        Mathäus), KUKA, and Region A3. <br />
        My contribution to the project consisted of a few scenes that were
        created using Adobe After Effects. The filming, editing, audio, and
        production were executed in collaboration with my team partner, Stefanie
        Schlichting.
      </Text>
      <br />
      <Button fullWidth size="lg" radius="md">
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "1.75vw" }}
          href="https://cloud.hs-augsburg.de/s/dzowMjWx4QqCqzr"
        >
          Click here to see the result
        </Link>
      </Button>
      <br />
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2vw",
          textAlign: "justify",
          marginRight: 20,
          marginTop: 10,
        }}
      >
        {" "}
        <em>
          The project was made in 2022 with a team partner as part of the course
          "Audiovisual Design" at the University of Applied Sciences in
          Augsburg.
        </em>
      </Text>
      <br />
      <br />
    </div>
  );
}
