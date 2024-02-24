import { Github, Send } from 'lucide-react'

const Project = ({ title, thumbnail, description, github, demo }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 items-center">
      <img
        src={thumbnail || '/project-1.svg'}
        alt="project thumbnail"
        className="rounded-xl"
      />

      <div className="grid gap-4">
        <h4 className="text-3xl font-medium">{title || 'Project Title'}</h4>
        <p>
          {description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempore Totam tenetur consectetur fugiat velit sit modi qui ab ipsam id eos minima aspernatur reprehenderit debitis dolor est quisquam nulla'}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-xl font-medium">Tech Stack:</p>
          <p className="bg-stone-800 text-white px-3 py-0.5 rounded-md">
            Next.js
          </p>
          <p className="bg-stone-800 text-white px-3 py-0.5 rounded-md">
            TypeScript
          </p>
          <p className="bg-stone-800 text-white px-3 py-0.5 rounded-md">
            Tailwind
          </p>
          <p className="bg-stone-800 text-white px-3 py-0.5 rounded-md">
            Express
          </p>
        </div>
        <div className="flex gap-3">
          <a href={github || '/'} className="btn btn-primary">
            GitHub
            <Github />
          </a>
          <a href={demo || '/'} className="btn btn-primary">
            Demo
            <Send />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Project
