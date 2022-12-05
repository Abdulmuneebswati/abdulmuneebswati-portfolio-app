import axios from "axios";
import { useState } from "react";
import DataContext from "./dataContext";

const DataState = (props) => {

const initialState = [];
const [introData, setIntroData] = useState(initialState);
const [servicesData, setServicesData] = useState(initialState);
const [techData, setTechData] = useState("");
const [eduData, setEduData] = useState("");
const [projectsData, setProjectsData] = useState("");
const [Project, setProject] = useState("");
const [randomProject, setRandomProject] = useState("");
const [client, setClient] = useState("");
const link = "http://localhost:8000/api/user";

  //Get intro sect data
  const getIntroSectData = () => {
    axios
      .get(`${link}/intro`)
      .then((res) => setIntroData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  //get services sect data
  const getServicesSectData = () => {
    axios
      .get(`${link}/services`)
      .then((res) => setServicesData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  //get technologies details
  const getTechSectData = () => {
    axios
      .get(`${link}/technologies`)
      .then((res) => setTechData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  // Get  Education deatials
  const getEduSectData = () => {
    axios
      .get(`${link}/education`)
      .then((res) => setEduData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  // Get single project
  const getProjectsSectData = () => {
    axios
      .get(`${link}/projects`)
      .then((res) => setProjectsData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  //Get single project
  const getSingleProject = (id) => {
    axios
      .get(`${link}/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  //get portfolio sect data
  const getPorfolioSectData = () => {
    axios
      .get(`${link}/randomprojects`)
      .then((res) => setRandomProject(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  //get recommendation sect data
  const getRecommendationSectData = () => {
    axios
      .get(`${link}/recommendation`)
      .then((res) => setClient(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  return (
    <DataContext.Provider
      value={{
        introData,
        getIntroSectData,
        servicesData,
        getServicesSectData,
        techData,
        getTechSectData,
        eduData,
        getEduSectData,
        projectsData,
        getProjectsSectData,
        getSingleProject,
        Project,
        getPorfolioSectData,
        randomProject,
        getRecommendationSectData,
        client,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
