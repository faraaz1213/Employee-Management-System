import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)
  if (!userData) return null

  const getCounts = (tasks) => {
    return tasks.reduce((acc, t) => {
      if (t.newTask) acc.newTask++
      if (t.active) acc.active++
      if (t.completed) acc.completed++
      if (t.failed) acc.failed++
      return acc
    }, { newTask: 0, active: 0, completed: 0, failed: 0 })
  }

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>
      <div>
        {userData.map((elem, idx) => {
          const counts = getCounts(elem.tasks || [])
          return (
            <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
              <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
              <h3 className='text-lg font-medium w-1/5 text-blue-400'>{counts.newTask}</h3>
              <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{counts.active}</h5>
              <h5 className='text-lg font-medium w-1/5 text-white'>{counts.completed}</h5>
              <h5 className='text-lg font-medium w-1/5 text-red-600'>{counts.failed}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask
