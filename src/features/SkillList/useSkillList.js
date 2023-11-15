import { useState, useEffect } from "react";
import { getSkillList } from "./getSkillList";

export const useSkillList = () => {
    const [mySkillset, setMySkillset] = useState([]);
    const [wantToLearn, setWantToLearn] = useState([]);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const data = await getSkillList();
                setMySkillset(data.mySkills);
                setWantToLearn(data.wantToLearn);
            } catch (error) {
                console.error("skillList fetch problem");
            }
        }
        
        fetchSkills();
    }, []);

    return { mySkillset, wantToLearn };
};