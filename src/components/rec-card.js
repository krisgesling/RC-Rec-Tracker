import React from 'react'
import { Link } from 'gatsby'

const RecCard = ({ recommendation }) => (
  <div
    style={{
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      marginBottom: '0.45rem',
      maxWidth: 960,
    }}
  >
    <div
      style={{
        background: 'rebeccapurple',
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        width: '100%',
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
        display: 'grid',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1.0875rem',
      }}
    >
      <p>
        {recommendation.text}
      </p>
      <div className="status-container"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          maxWidth: '100%',
        }}
      >
      {recommendation.status && recommendation.status.map((s, i) => {
        s = s.replace(/ +/g, '-').toLowerCase();
        let elStyle = {
          borderRadius: '50%',
          margin: '0.2rem',
          padding: '1rem 1.0875rem',
          height: '1rem',
          width: '1rem',
        };
        switch (s) {
          case 'implemented':
            elStyle.backgroundColor = 'green';
            break;
          case 'in-progress':
            elStyle.backgroundColor = 'yellow';
            break;
          case 'stalled':
            elStyle.backgroundColor = 'orange';
            break;
          case 'no-progress':
            elStyle.backgroundColor = 'red';
            break;
          case 'not-adopted':
            elStyle.backgroundColor = 'black';
            break;
          default:
        }
        return (
          <div
            key={i}
            className={`status ${s}`}
            style={elStyle}
          >
          </div>)
      })}
      </div>
    </div>
  </div>
)

export default RecCard
