import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Filter from '../components/filter'
// import Image from '../components/image'
import RecCard from '../components/rec-card'
import chapters from '../data/recs.js'

const IndexPage = () => (
  <Layout>
    <p>The Royal Commission into the Protection and Detention of Children in the Northern Territory made 227 recommendations. The NT Government either fully supported, or supported in principle all 227 of these. This is an attempt to track their progress.</p>
    <Filter />
    {chapters.map((chapter, i) => {
      return (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '1rem',
            marginBottom: '1.45rem',
          }}
        >
          <h2 style={{
            gridColumn: '1 / -1',
            marginBottom: '0.45rem',
          }}>
            Chapter {chapter.number}: {chapter.name}
          </h2>
          {chapter.recommendations.map((rec, j) => {
            return (
              <RecCard key={Number(i+''+j)} recommendation={rec} />
            )
          })}
        </div>
      )
    })}
  </Layout>
)

export default IndexPage
