import { useState, useEffect } from "react";
import { getSkillList } from "./getSkillList";

export const useSkillList = () => {
  const [mySkillSet, setMySkillSet] = useState([]);
  const [wantToLearn, setWantToLearn] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkillList();
        setMySkillSet(data.mySkills);
        setWantToLearn(data.wantToLearn);
      } catch (error) {
        console.error("skillList fetch problem", error);
      }
    }

    fetchSkills();
  }, []);

  return { mySkillSet, wantToLearn };
};
