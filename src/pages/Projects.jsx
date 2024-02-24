import Intro from '../components/Intro'
import Project from '../components/Project'

const Projects = () => {
  return (
    <div className="container">
      <Intro
        title="Latest Work"
        subtitle="Projects"
        body="Dive into my project showcase – where ideas come
          to life through code. Explore a curated selection of my recent web
          development creations below."
      />

      <div className="my-10 space-y-7">
        <Project thumbnail="/project-1.svg" title="TODO App" />
        <Project thumbnail="/project-2.svg" title="Chatcord" />
        <Project thumbnail="/project-3.svg" title="CLINIX" />
      </div>
    </div>
  )
}
export default Projects
