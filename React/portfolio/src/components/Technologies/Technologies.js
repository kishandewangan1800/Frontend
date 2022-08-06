import React from "react";
import { DiReact, DiJava} from "react-icons/di";
import {BsGraphUp} from 'react-icons/bs'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Experience</SectionTitle>
    <SectionText>
      I am a Front End Developer searching for a chance to work with a company
      and develop my talents. I'm a newbie with some lovely projects designing
      websites and web application. I am an expert in JavaScript and have skill
      with DSA in Java. I have developing expertise with React, as well as more
      than 3 years of management, public relations, and marketing experience.
      Check out my work or contact me!
    </SectionText>
    <List>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Teaching Assistent</ListTitle>
          <ListParagraph>Working as TA at Coding Ninjas in DSA Java (Jul 22 - Present)</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend Intern</ListTitle>
          <ListParagraph>Worked as Frontend Developer at Agrivate in React (Mar 22 - Jun 22)</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BsGraphUp size="3rem" />
        <ListContainer>
          <ListTitle>Marketing & PR</ListTitle>
          <ListParagraph>Worked as Ass. Marketing Manager at MBP & SBH (May 18 - Oct 21)</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
