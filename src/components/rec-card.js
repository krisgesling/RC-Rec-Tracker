import React from 'react'
import { Link } from 'gatsby'

const RecCard = ({ recommendation }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    }}
  >
    <div
      style={{
        background: 'rebeccapurple',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Recommendation {recommendation.number}
        </Link>
      </h3>
    </div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1.0875rem',
      }}
    >
      <p>
        {recommendation.text}
      </p>
    </div>
  </div>
)

export default RecCard
