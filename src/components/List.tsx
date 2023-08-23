import React from 'react'
import { CompanyType } from '../types'

function List({ list }: { list: CompanyType[] }) {
  return (
    <ul>
      {list.length === 0 && <li>작성하신 일지가 없습니다.</li>}
      {list.length > 0 &&
        list.map((company: CompanyType) => (
          <li>
            <span>날짜</span>
            <span>{company.title}</span>
            <span>{company.locate}</span>
            <span>{company.detail}</span>
          </li>
        ))}
    </ul>
  )
}

export default List
