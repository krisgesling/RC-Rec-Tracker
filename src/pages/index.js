import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import RecCard from '../components/rec-card'

const chapters = [
  {
    "number": "1",
    "name": "The work of the Commission",
    "recommendations": [
      {
        "number": "1.1",
        "text": "The Northern Territory and Commonwealth governments establish a program of community engagement to visit communities and communicate the outcomes and recommendations of this report."
      }
    ]
  }
]
const IndexPage = () => (
  <Layout>
    <h2>NT Royal Commission</h2>
    <p>The Royal Commission into the Protection and Detention of Children in the Northern Territory made 227 recommendations. The NT Government either fully supported, or supported in principle all 227 of these. This is an attempt to track their progress.</p>
    <RecCard recommendation={chapters[0].recommendations[0]} />
  </Layout>
)

export default IndexPage
