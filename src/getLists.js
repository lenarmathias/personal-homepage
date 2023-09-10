export const getMySkills = async () => {
    const mySkills = await fetch("/mySkills.json");

    if (!mySkills.ok) {
        new Error(mySkills.statusText);
    }

    return await mySkills.json();
};

export const getWantToLearn = async () => {
    const wantToLearn = await fetch("/wantToLearn.json");

    if (!wantToLearn.ok) {
        new Error(wantToLearn.statusText);
    }

    return await wantToLearn.json();
};