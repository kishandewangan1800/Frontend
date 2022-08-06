import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
      I build things for the web. I’m a Frontend Web Developer, attanding Full Stack Web Development Bootcamp at AccioJob
      </SectionText>
      <Button onClick={()=>window.location='https://google.com'}>
        Download Resume
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;