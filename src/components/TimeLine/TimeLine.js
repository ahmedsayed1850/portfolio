import React, { useState, useRef, useEffect } from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="About">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Front-End engineer with a proven ability to adaptin both self-starting
        and collaborative environments while staying focused on achieving
        high-quality results under strict deadlines.
        <br />
        <br />
        results-based approch and collaborate with cross-functional teams sales
        and UX designers also when it come to backend I have knowledge and
        what's going behind the scene.
        <br />
        <br />
        Eager to obtain a challenging position at innovative company like Dream
        Version that will expand my learning and build upon my developer skills.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
