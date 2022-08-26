import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, salute } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <salute>
        Hello there,   <br />
      I'm Newton! a Software Developer
        </salute>
      </SectionTitle>
      <SectionText>
      I am a <strong>Full-Stack software developer 💻 </strong>who loves exploring new
                    technologies 🤖 and creating
                    applications 🚀.
      </SectionText>
      <Button style= {{color: '#fff'}}  onClick={props.handleClick}>
        <Link href="https://linkedin.com/in/ngaina-newton-347643202">LinkedIn
        </Link> 
              
      </Button>
    </LeftSection>
  </Section>
</>
);

export default Hero;