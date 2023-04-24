// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'
import CourseTimeLineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="timelineview-wrap">
      <h1 className="heading">
        MY JOURNEY OF <br /> <span className="sub-wrap">CCBP 4.0</span>
      </h1>
      <div>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimeLineCard key={eachItem.id} data={eachItem} />
            ) : (
              <ProjectTimeLineCard key={eachItem.id} data={eachItem} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
