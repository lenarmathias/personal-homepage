export const getSkillList = async () => {
    const skillList = await fetch("/personal-homepage/skillList.json");

    if (!skillList.ok) {
        new Error(skillList.statusText);
    }

    return await skillList.json();
};