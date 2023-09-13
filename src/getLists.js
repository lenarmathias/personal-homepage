export const getMySkills = async () => {
    const mySkills = await fetch("/personal-homepage/mySkills.json");

    if (!mySkills.ok) {
        new Error(mySkills.statusText);
    }

    return await mySkills.json();
};

export const getWantToLearn = async () => {
    const wantToLearn = await fetch("/personal-homepage/wantToLearn.json");

    if (!wantToLearn.ok) {
        new Error(wantToLearn.statusText);
    }

    return await wantToLearn.json();
};