import React from 'react';
import {CgFigma } from  'react-icons/cg'
import {FaBootstrap,FaNodeJs } from  'react-icons/fa'
import { DiFirebase, DiReact, DiDjango } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range a technologies in the web development world.
    From Back-end To Design
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="6rem" />
        <FaBootstrap size="6rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiece with <br />
          React.js and Bootsrap
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="6rem" />
        <DiDjango size="6rem" />
        <FaNodeJs size="6rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node js, Python Django and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <CgFigma size="6rem" />
      </picture>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
