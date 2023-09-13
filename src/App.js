import AboutMe from "./AboutMe";
import ThemeSwitchButton from "./features/theme/ThemeSwitchButton";
import Section from "./common/Section";
import MySkillsList from "./features/lists/MySkillsList";
import WantToLearnList from "./features/lists/WantToLearnList";
import Portfolio from "./features/Portfolio";
import Footer from "./Footer/index"

function App() {
  return (
    <>
      <ThemeSwitchButton />
      <AboutMe />
      <Section
        title="My skillset includes"
        content={<MySkillsList />}
      />
      <Section
        title="What I want to learn next"
        content={<WantToLearnList />}
      />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;