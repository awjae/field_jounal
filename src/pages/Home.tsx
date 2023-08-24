import React, { useState } from 'react'
import { AddButton } from '../lib/Button'
import List from '../components/List'
import Modal from '../lib/Modal'
import styles from '../styles/modal.module.css'
import { CompanyType } from '../types'

function Home() {
  const [open, setOpen] = useState(false)
  const [companyList, setCompanyList] = useState<CompanyType[]>([])
  const [form, setForm] = useState<CompanyType>({
    title: '',
    locate: '',
    detail: '',
  })

  const companyAdd = () => {
    setCompanyList((prevState) => [...prevState, form])
    setOpen(false)
  }

  return (
    <main>
      <List list={companyList}></List>
      <AddButton handleClick={() => setOpen(true)}>+</AddButton>
      <Modal open={open} handleClick={setOpen}>
        <div className={styles.addModal}>
          <div>
            <input
              type="text"
              placeholder="업체"
              value={form.title}
              onChange={(e) => setForm((prevState) => ({ ...prevState, title: e.target.value }))}
            />
            <input
              type="text"
              placeholder="지역"
              value={form.locate}
              onChange={(e) => setForm((prevState) => ({ ...prevState, locate: e.target.value }))}
            />
            <input
              type="text"
              placeholder="상세내역"
              value={form.detail}
              onChange={(e) => setForm((prevState) => ({ ...prevState, detail: e.target.value }))}
            />
          </div>
          <div>
            <button onClick={() => setOpen(false)}>취소</button>
            <button onClick={companyAdd}>저장</button>
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default Home
