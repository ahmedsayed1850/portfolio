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
        Front-End engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.
        <br />
        <br />
results-based approach and collaboration with cross-functional teams sales and UX designers also when it comes to the backend I have the knowledge and what's going behind the scene.
        <br />
        <br />
Eager to obtain a challenging position at an innovative company like Dream Version that will expand my learning and build upon my developer skills.
   
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
