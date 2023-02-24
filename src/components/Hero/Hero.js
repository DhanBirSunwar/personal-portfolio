import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button                               from '../../styles/GlobalComponents/Button';
import {LeftSection}                        from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br/> my portfolio website!

                .
            </SectionTitle>
            <SectionText>
                I am a frontend developer who specializes in creating engaging and responsive user interfaces using the
                latest technologies and frameworks. I pay close attention to detail and am passionate about staying
                up-to-date with the latest web development trends.
            </SectionText>
            <Button onClick={() => window.location.href = 'mailto:deanvr42@gmail.com'}>Contact me</Button>
        </LeftSection>
    </Section>
);

export default Hero;
