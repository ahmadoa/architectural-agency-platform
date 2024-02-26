import { useLocation } from "react-router-dom";
import Layout from "@/layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleProject() {
  let location = useLocation();
  const [project, setProject] = useState({});

  const getProject = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/singleProject/${location.state.id}`
      );
      console.log(response.data);
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return <Layout>{location.state.id}</Layout>;
}
