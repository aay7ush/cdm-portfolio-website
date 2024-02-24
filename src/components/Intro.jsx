const Intro = ({ title, subtitle, body }) => {
  return (
    <div className="text-center space-y-1">
      <p>{subtitle}</p>
      <h3 className="text-3xl lg:text-4xl text-blue-600 font-bold">{title}</h3>
      <p className="max-w-3xl mx-auto">{body}</p>
    </div>
  )
}
export default Intro
