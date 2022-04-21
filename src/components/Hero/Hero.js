import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My awesome website
      </SectionTitle>
      <SectionText>
        Aspiring by the programming and create every new way of learning new
        technology and implement it.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:contact@ahmed-el-sayed.com")}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
