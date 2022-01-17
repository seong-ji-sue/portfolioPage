import React from 'react';
import Info from '../Info/Info';
import Profiles from '../Profiles/Profiles';
import Skills from '../Skills/Skills';
import Archivings from '../Archivings/Archivings';
import Projects from '../Projects/Projects';
import Careers from '../Careers/Careers';

function MainPage({ multiRef }) {
  return (
    <>
      <Info infoRef={multiRef?.InfoRef} />
      <Profiles ProfilesRef={multiRef?.ProfilesRef} />
      <Skills SkillsRef={multiRef?.SkillsRef} />
      <Archivings ArchivingsRef={multiRef?.ArchivingsRef} />
      <Projects ProjectsRef={multiRef?.ProjectsRef} />
      <Careers CareersRef={multiRef?.CareersRef} />
    </>
  );
}

export default MainPage;
