// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {data} = props
  const {projectTitle, duration, description, imageUrl, projectUrl} = data
  return (
    <div className="projecttimeLinecard-wrap">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="top-wrap">
        <h1 className="heading">{projectTitle}</h1>
        <div className="wrap">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeLineCard
