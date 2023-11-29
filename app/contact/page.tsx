import { Button, Text, Title } from "@mantine/core";
import { link } from "fs";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Title style={{ marginLeft: 20, fontSize: "6.5vw" }}>CONTACT ME</Title>
      <Text
        style={{
          marginLeft: 20,
          fontSize: "2.75vw",
          textAlign: "justify",
          marginRight: 20,
          marginTop: 10,
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
        <br />
      </Text>
      <Title style={{ marginLeft: 20, marginTop: 70, fontSize: "4vw" }}>
        Impressum
      </Title>
      <Text style={{ marginLeft: 20, fontSize: "2.75vw" }}>
        Information according to § 5 TMG <br />
        <br />
        Diana Maria Stirbu <br /> Annastr. 27 <br />
        86150 Augsburg <br />
        <br />
        Represented by: <br />
        Diana Maria Stirbu <br /> <br />
        <b>Contact</b> <br />
        Phone: +49 170 4070375 <br /> Email: didistirbu2000@gmail.com,
        dianamaria.stirbu@hs-augsburg.de <br />
        <br />
        <b>Disclaimer: </b>
        <br />
        <br />
        <b>Liability for content</b>
        <br />
        The content of this website has been created with the utmost care.
        However, we cannot guarantee the accuracy, completeness, and timeliness
        of the content. As a service provider, we are responsible for our own
        content on these pages in accordance with § 7 para.1 TMG of the general
        laws. According to §§ 8 to 10 TMG, as a service provider, we are not
        obligated to monitor transmitted or stored third-party information or to
        investigate circumstances that indicate illegal activity. Obligations to
        remove or block the use of information under general law remain
        unaffected. However, liability in this regard is only possible from the
        time of knowledge of a specific legal violation. Upon becoming aware of
        such legal violations, we will remove this content immediately. <br />
        <br />
        <em>
          Website Imprint created by impressum-generator.de from Kanzlei
          Hasselbach
        </em>
        <br />
        <br />
        <br />
        <br />
      </Text>
    </div>
  );
}
