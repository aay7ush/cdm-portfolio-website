import { useEffect, useState } from 'react'

function SkillProgressBar({ skill, percentage }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    if (percentage > 0) {
      let progress = 0
      const interval = setInterval(() => {
        progress += 5
        if (progress > percentage) {
          progress = percentage
          clearInterval(interval)
        }
        setAnimatedPercentage(progress)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [percentage])

  return (
    <div className="space-y-2 text-xl font-medium">
      <p>{skill}</p>
      <div className="h-5 w-80 bg-stone-800 rounded-lg relative">
        <div
          style={{ width: `${animatedPercentage}%` }}
          className="h-5 bg-blue-600 rounded-lg absolute left-0 transition-all duration-500"
        ></div>
        <p className="absolute right-0 -top-9 text-blue-600">
          {animatedPercentage}%
        </p>
      </div>
    </div>
  )
}

export default SkillProgressBar
