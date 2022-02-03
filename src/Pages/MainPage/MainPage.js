import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Profiles from '../Profiles/Profiles';
import Skills from '../Skills/Skills';
import Archivings from '../Archivings/Archivings';
import Projects from '../Projects/Projects';
import Careers from '../Careers/Careers';
import {
  MOCK_ARCHIVINGS_API,
  MOCK_CAREERS_API,
  MOCK_INFOS_API,
  MOCK_PROJECTS_API,
  MOCK_SKILLS_API,
} from '../../utils/api';
import axios from 'axios';

function MainPage({ multiRef }) {
  const [skillsData, setSkillsData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const [carrerData, setCareerData] = useState([]);
  const [archivingData, setArchivingData] = useState([]);
  const {
    infoRef,
    profilesRef,
    skillsRef,
    archivingsRef,
    projectsRef,
    careersRef,
  } = multiRef;

  useEffect(() => {
    totalData();
  }, []);

  const totalData = () => {
    axios
      .all([
        axios.get(`${MOCK_SKILLS_API}`),
        axios.get(`${MOCK_PROJECTS_API}`),
        axios.get(`${MOCK_INFOS_API}`),
        axios.get(`${MOCK_CAREERS_API}`),
        axios.get(`${MOCK_ARCHIVINGS_API}`),
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5) => {
          setSkillsData(res1.data.skillsData);
          setProjectData(res2.data.projectData);
          setInfoData(res3.data.infoData);
          setCareerData(res4.data.CareerData);
          setArchivingData(res5.data.archivingData);
        })
      )
      .catch(() => {
        console.log('FAIL!!');
      });
  };
  return (
    <>
      <Info {...{ infoData, infoRef }} />
      <Profiles {...{ profilesRef }} />
      <Skills {...{ skillsData, skillsRef }} />
      <Archivings {...{ archivingData, archivingsRef }} />
      <Projects {...{ projectData, projectsRef }} />
      <Careers {...{ carrerData, careersRef }} />
    </>
  );
}

export default MainPage;
