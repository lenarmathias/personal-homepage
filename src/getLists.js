export const getMySkills = async () => {
    const mySkills = await fetch("/mySkills.json");

    if (!mySkills.ok) {
        new Error(mySkills.statusText);
    }

    return await mySkills.json();
};
