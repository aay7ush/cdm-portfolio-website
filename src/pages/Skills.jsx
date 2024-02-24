import Intro from '../components/Intro'
import SkillProgressBar from '../components/SkillProgressBar'

const Skills = () => {
  return (
    <section className="container">
      <Intro
        title="My Skills"
        subtitle="What I Know?"
        body="Explore my versatile skill set, merging creative animation artistry with a strong technical foundation."
      />

      <div className="flex gap-7 md:gap-10 flex-wrap justify-center py-10 font-medium">
        <SkillProgressBar skill="Next.js" percentage={85} />
        <SkillProgressBar skill="TypeScript" percentage={70} />
        <SkillProgressBar skill="Tailwind" percentage={90} />
        <SkillProgressBar skill="Node.js" percentage={75} />
        <SkillProgressBar skill="Express" percentage={80} />
      </div>
    </section>
  )
}
export default Skills
