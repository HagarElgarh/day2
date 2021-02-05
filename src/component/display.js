import React from 'react'
import { Table } from 'reactstrap'

const Students = ({ list }) => {
  const data = list.map((item) => {
    return (
      <tbody>
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      </tbody>
    )
  })

  return (
    <div className="container">
      <br />
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        {data}
      </Table>
    </div>
  )
}
export default Students
