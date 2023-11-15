import { useSkillList } from "./useSkillList";
import { List, ListItem } from "./styled";
import { ListText } from "../../common/textStyles/styled";

const SkillList = ({ toLearn }) => {
    const { mySkillset, wantToLearn } = useSkillList();

    return (
        <List>
            {(toLearn ? wantToLearn : mySkillset).map(skill => (
                <ListItem key={skill.id}>
                    <ListText>
                        {skill.content}
                    </ListText>
                </ListItem>
            ))}
        </List>
    )
};

export default SkillList;