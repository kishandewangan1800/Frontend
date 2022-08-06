import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';



import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:91-7999799095'>+91-7999799095</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:kishan.dewangan1800@gmail.com'>kishan.dewangan1800@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>

      <SocialContainer>
        <CompanyContainer>
          <Slogan>Learning & Creating</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/kishandewangan1800'>
        <AiFillGithub />
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/kishandewangan1800'>
        <AiFillLinkedin />
      </SocialIcons>

      <SocialIcons href='https://www.instagram.com/ridderkisshna'>
        <AiFillInstagram />
      </SocialIcons>
      </SocialContainer>

    </FooterWrapper>
  );
};

export default Footer;
