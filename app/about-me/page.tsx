import { Button, Text, Title } from "@mantine/core";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* <Link href="/">Back to MainPage</Link> */}
      <Title style={{ marginLeft: 20, fontSize: "6.5vw" }}>ABOUT</Title>
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2.75vw",
          textAlign: "justify",
          marginRight: 20,
          marginTop: 10,
        }}
      >
        Hello! Im Diana Maria Stirbu, a dedicated student with a passion for
        Interactive Media design. My journey revolves around exploring the
        ever-evolving world of digital experiences and visual storytelling.{" "}
        <br />
        <br />I have chosen to specialize in Interactive Media design because I
        like to mix art and technology. This area allows me to seamlessly
        combine aesthetic principles, user experience, and cutting-edge tech to
        create engaging and engaging digital experiences. <br />
        <br />
        As a student specializing in Interactive Media design, I&apos;m excited
        to collaborate, learn, and grow in this dynamic field. Im excited to
        share my insights, projects, and discoveries with you as I embark on
        this creative and ever-changing journey. <br />
        <br />
        Join me as we explore the limitless possibilities of Interactive Media
        design, and let&apos;s create experiences that leave a lasting impact in
        the digital realm. <br /> <br />
        Warm regards, Diana Maria Stirbu
        <br />
        <br />
      </Text>
    </div>
  );
}
