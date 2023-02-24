import React                                                     from 'react';
import {DiFirebase, DiReact, DiZend}                             from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle}      from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider/>
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>As a technology professional, I have extensive experience working with JavaScript, React, Next.js, Storyblok,
            HTML5, CSS, TailwindCSS,boostrap and Hotwire to develop dynamic, server-rendered web applications with
            engaging, responsive user interfaces.</SectionText>
<List>
    <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>Experienced with <br/> Javascript, React, Nextjs</ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
            <ListTitle>Headless CMS</ListTitle>
            <ListParagraph>Experienced with <br/>Storyblok</ListParagraph>
        </ListContainer>
    </ListItem>
    <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>Experienced with <br/>Figma</ListParagraph>
        </ListContainer>
    </ListItem>
</List>
    </Section>
);
Technologies;

export default Technologies;
