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
              <LinkItem href="tel:+97517598942"> +975 17 59 89 42</LinkItem>
          </LinkColumn>
      </LinkList>
        <LinkList>
            <LinkColumn>
                <LinkTitle>E-mail</LinkTitle>
                <LinkItem href="mailto:deanvr42@gmail.com"> deanvr42@gmail.com </LinkItem>
            </LinkColumn>
        </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>
                        Innovating one project at a time.
                    </Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/DhanBirSunwar">
                        <AiFillGithub size="3rem"/>
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/dhan.mukhia/?hl=en">
                        <AiFillInstagram size="3rem"/>
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/dhan-bir-sunwar-688110151/">
                        <AiFillLinkedin size="3rem"/>
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
