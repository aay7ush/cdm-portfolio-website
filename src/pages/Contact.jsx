import emailjs from '@emailjs/browser'
import { Send } from 'lucide-react'
import Intro from '../components/Intro'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, message } = e.target

    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.TEMPLATE_ID

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name.value,
          to_name: 'YOUR NAME',
          from_email: email.value,
          to_email: 'YOUR EMAIL',
          message: message.value,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank You! I'll get back to you as soon as possible.")

          name.value = ''
          email.value = ''
          message.value = ''
        },
        (error) => {
          console.log(error)
          alert('Something went wrong.')
        }
      )
  }

  return (
    <article className="container">
      <Intro
        title="Contact Me"
        subtitle="How to connect?"
        body="Contact me to explore collaboration and make your creative visions a reality. Your journey to animated storytelling starts here."
      />

      <form
        action="#"
        className="max-w-2xl mx-auto my-7 grid gap-4 bg-gray-100 rounded-lg px-6 py-12"
        onSubmit={handleSubmit}
      >
        <h4 className="mb-4 text-3xl font-bold text-blue-600">Get In Touch</h4>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="input"
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Message"
          required
          className="resize-none input"
        ></textarea>
        <button type="submit" className="btn-primary mx-auto">
          <span>Send</span>
          <Send />
        </button>
      </form>
    </article>
  )
}
export default Contact

{
  /* <script>
  import emailjs from "@emailjs/browser"

  const form = document.querySelector("form") as HTMLFormElement



  const handleSubmit = (e: Event) => {
    e.preventDefault()

    const name = document.querySelector(
      "input[name='name']"
    ) as HTMLInputElement
    const email = document.querySelector(
      "input[name='email']"
    ) as HTMLInputElement
    const message = document.querySelector(
      "textarea[name='message']"
    ) as HTMLTextAreaElement

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name.value,
          to_name: "Sadhna",
          from_email: email.value,
          to_email: "sadhnakaithwas28@gmail.com",
          message: message.value,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank You! I'll get back to you as soon as possible.")

          name.value = ""
          email.value = ""
          message.value = ""
        },
        (error) => {
          console.log(error)

          alert("Something went wrong.")
        }
      )
  }

  form.addEventListener("submit", (e) => handleSubmit(e))
</script> */
}
