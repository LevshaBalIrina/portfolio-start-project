import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1_1.webp';
import timer from '../../../assets/images/proj-2_1.webp';
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';
import React from 'react';
import {S} from './Works_Styles'

const worksItems = ['All', 'landing page', 'React', 'spa'];

const workData = [
  {
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: socialImg,
  },
  {
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: timer,
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems}></TabMenu>
        <FlexWrapper
          justify={'space-between'}
          align={'flex-start'}
          wrap={'wrap'}
        >
          {workData.map((w, index) => {
            return <Work title={w.title} text={w.text} src={w.src}></Work>;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
