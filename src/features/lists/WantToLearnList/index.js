import { useState, useEffect } from "react";
import { getWantToLearn } from "../../../getLists";
import { List, ListItem, ListText } from "../styled";

const WantToLearnList = () => {
    const [wantToLearn, setWantToLearn] = useState([]);

    useEffect(() => {
        async function fetchSkills() {
            try {
                const data = await getWantToLearn();
                setWantToLearn(data.wantToLearn);
            } catch (error) {
                console.error("wantToLearn fetch problem");
            }
        }
        fetchSkills();
    });

    return (
        <List>
            {wantToLearn.map(skill => (
                <ListItem key={skill.id}>
                    <ListText>
                        {skill.content}
                    </ListText>
                </ListItem>
            ))}
        </List>
    )
};

export default WantToLearnList;