import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 items-center">
      <img src="/hero.svg" alt="hero image" className="max-w-lg mx-auto" />

      <div className="grid gap-y-3 text-center lg:text-start">
        <h2 className="text-5xl lg:text-6xl font-bold">
          Hello, I&apos;m Josef
        </h2>

        <div className="text-blue-600 font-medium flex gap-3 items-center justify-center lg:justify-normal">
          <span className="w-20 rounded-md h-1 bg-blue-600" />
          <h3 className="text-3xl">Full-Stack Developer</h3>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          ipsam reiciendis cum, saepe veritatis non nemo perferendis. Dolor
          vitae quisquam ea illo inventore voluptatum provident?
        </p>

        <Link to="/contact" className="btn-primary mx-auto lg:mx-0">
          Say Hi
          <MessageCircle />
        </Link>
      </div>
    </section>
  )
}
export default Hero
