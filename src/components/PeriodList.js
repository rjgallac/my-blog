import React from "react"
import { Link } from "gatsby"

const PeriodList = ({ periods }) => {
  return (
    <div className="period-list">
      <h3>Archive</h3>
      <ul>
        {periods.map((period, index) => (
          <li key={index}>
            <Link to={period.fieldValue}>
              {period.fieldValue}
            </Link>
            <span className="post-count">({period.edges.length})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PeriodList
