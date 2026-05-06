import React from "react"
import { Link } from "gatsby"

const PeriodList = ({ periods }) => {
  const periodListStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    minHeight: "500px",
    position: "sticky",
    top: "20px",
  }

  const titleStyle = {
    marginTop: "0",
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  }

  const ulStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
  }

  const liStyle = {
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  }

  const linkStyle = {
    textDecoration: "none",
    color: "#666",
    fontSize: "14px",
  }

  const countStyle = {
    fontSize: "12px",
    color: "#999",
  }

  return (
    <div className="period-list" style={periodListStyle}>
      <h3 style={titleStyle}>Archive</h3>
      <ul style={ulStyle}>
        {periods && periods.length > 0 ? (
          periods.map((period, index) => (
            <li key={index} style={liStyle}>
              <Link to={period.fieldValue} style={linkStyle}>
                {period.fieldValue}
              </Link>
              <span className="post-count" style={countStyle}>
                ({period.edges.length})
              </span>
            </li>
          ))
        ) : (
          <li style={{ color: "#999", fontSize: "14px" }}>
            No archive entries found
          </li>
        )}
      </ul>
    </div>
  )
}

export default PeriodList
