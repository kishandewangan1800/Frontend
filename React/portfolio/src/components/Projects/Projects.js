import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { projectsData } from './ProjectData';


const Projects = () => (
<Section nopadding id='projects'>
  <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsData.map((project)=>(
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title>
              {project.title}
            </HeaderThree>
            <Hr />
            <CardInfo>
              {project.description}
            </CardInfo>
          </TitleContent>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <Button alt href={project.visit}>Demo</Button>
            <Button alt href={project.source}>Code</Button>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>

</Section>
);

export default Projects;