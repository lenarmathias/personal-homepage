import AboutMe from "./AboutMe";
import ThemeSwitchButton from "./features/theme/ThemeSwitchButton";
import Section from "./common/Section";
import MySkillsList from "./features/lists/MySkillsList";

function App() {
  return (
    <>
      <ThemeSwitchButton />
      <AboutMe />
      <Section
        title="My skillset includes"
        content={<MySkillsList />} />
    </>
  );
}

export default App;