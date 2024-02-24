import { Download } from 'lucide-react'
import Intro from '../components/Intro'

const About = () => {
  return (
    <section className="container">
      <Intro
        title="About Me"
        subtitle="Who Am I?"
        body="Delve deeper into my journey, where the fusion of storytelling and technology defines my creative path."
      />

      <div className="grid items-center lg:grid-cols-2">
        <img src="/about.svg" alt="about image" className="max-w-lg mx-auto" />

        <div className="space-y-3 text-center lg:text-start">
          <h2 className="text-5xl lg:text-6xl font-bold">
            I'm <span className="text-blue-600">Full-Stack</span> Developer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex
            rerum. Ratione inventore soluta hic modi? Rerum accusamus tempora
            deleniti harum, perspiciatis quae nemo voluptatem, provident,
            voluptatibus repellat sapiente eum delectus doloribus praesentium
            corporis nulla obcaecati alias!
          </p>
          <button className="btn-primary mx-auto lg:mx-0">
            Resume
            <Download />
          </button>
        </div>
      </div>
    </section>
  )
}
export default About
