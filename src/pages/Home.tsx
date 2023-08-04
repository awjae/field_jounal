import React from 'react'
import { AddButton } from '../lib/Button'
import List from '../components/List'

function Home() {
  return (
    <main>
      <List></List>
      <AddButton>+</AddButton>
    </main>
  )
}

export default Home
