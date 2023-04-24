import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {data} = props
  const {courseTitle, duration, description, tagsList} = data
  return (
    <div className="projecttimeLinecard-wrap">
      <div className="top-wrap">
        <h1 className="heading">{courseTitle}</h1>
        <div className="wrap">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="boxes">
        {tagsList.map(eachTag => (
          <p className="box" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard
