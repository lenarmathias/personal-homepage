export const getSkillList = async () => {
  const skillList = await fetch(
    `${import.meta.env.BASE_URL}skillList.json`
  );

  if (!skillList.ok) {
    throw new Error(skillList.statusText);
  }

  return await skillList.json();
};
