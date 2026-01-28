import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Research from '../components/Research'
import PreviousExperience from '../components/PreviousExperience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Interests from '../components/Interests'
import Patents from '../components/Patents'
import Publications from '../components/Publications'
import Projects from '../components/Projects'
import Awards from '../components/Awards'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-blue-50' : 'bg-navy'
    }`}>
      <Head>
        <title>Gopalakrishnan Thirunellai Venkitachalam - Research Portfolio</title>
        <meta name="description" content="Graduate Researcher in AI & Robotics Research at Carnegie Mellon University" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Research />
        <PreviousExperience />
        <Interests />
        <Patents />
        <Education />
        <Skills />
        <Publications />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
