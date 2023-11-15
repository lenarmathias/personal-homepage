import ThemeSwitchButton from "./features/theme/ThemeSwitchButton";
import AboutMe from "./AboutMe";
import Section from "./common/Section";
import SkillList from "./features/SkillList"
import Portfolio from "./features/Portfolio";
import Footer from "./Footer/index"

function App() {
  return (
    <>
      <ThemeSwitchButton />
      <AboutMe />
      <Section
        title="My skillset includes"
        content={<SkillList />}
      />
      <Section
        title="What I want to learn next"
        content={<SkillList toLearn />}
      />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;