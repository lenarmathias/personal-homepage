import { useState, useEffect } from "react";
import { getMySkills } from "../../../getLists";
import { List, ListItem } from "../styled";
import { ListText } from "../../../common/textStyles/styled";

const MySkillsList = () => {
    const [mySkills, setMySkills] = useState([]);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const data = await getMySkills();
                setMySkills(data.mySkills);
            } catch (error) {
                console.error("mySkills fetch problem");
            }
        }
        fetchSkills();
    });

    return (
        <List>
            {mySkills.map(skill => (
                <ListItem key={skill.id}>
                    <ListText>
                        {skill.content}
                    </ListText>
                </ListItem>
            ))}
        </List>
    )
};

export default MySkillsList;