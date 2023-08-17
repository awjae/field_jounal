import React from 'react'
import { AddButton } from '../lib/Button'
import List from '../components/List'
import Modal from '../lib/Modal'
import styles from '../styles/modal.module.css'

function Home() {
  const [open, setOpen] = React.useState(false)

  return (
    <main>
      <List></List>
      <AddButton handleClick={() => setOpen(true)}>+</AddButton>
      <Modal open={open} handleClick={setOpen}>
        <div className={styles.addModal}>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default Home
