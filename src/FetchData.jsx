import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function FetchData() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data
        setRecords(data);
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>{list.book_id} | {list.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchData