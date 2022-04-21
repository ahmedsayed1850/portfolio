import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+201008012559">+20-100-801-2559</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-Mail</LinkTitle>
          <LinkItem
            href="mailto:contact@ahmed-el-sayed.com"
            style={{ whiteSpace: "nowrap" }}
          >
            contact@ahmed-el-sayed.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ahmedsayed1850">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/ahmedtigam/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
