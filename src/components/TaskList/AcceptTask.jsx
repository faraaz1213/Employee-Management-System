import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ task, employeeId, taskIndex }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const markComplete = () => {
    const updated = userData.map(emp => {
      if (emp.id === employeeId) {
        const newTasks = emp.tasks.map((t, i) => {
          if (i === taskIndex) {
            return { ...t, active: false, completed: true, newTask: false, failed: false }
          }
          return t
        })
        // update counts from tasks (recompute)
        const counts = computeCountsFromTasks(newTasks)
        return { ...emp, tasks: newTasks, taskCounts: counts }
      }
      return emp
    })

    setUserData([...updated])
    localStorage.setItem('employees', JSON.stringify(updated))
  }

  const markFailed = () => {
    const updated = userData.map(emp => {
      if (emp.id === employeeId) {
        const newTasks = emp.tasks.map((t, i) => {
          if (i === taskIndex) {
            return { ...t, active: false, failed: true, newTask: false, completed: false }
          }
          return t
        })
        const counts = computeCountsFromTasks(newTasks)
        return { ...emp, tasks: newTasks, taskCounts: counts }
      }
      return emp
    })

    setUserData([...updated])
    localStorage.setItem('employees', JSON.stringify(updated))
  }

  const computeCountsFromTasks = (tasks) => {
    return tasks.reduce((acc, t) => {
      if (t.newTask) acc.newTask++
      if (t.active) acc.active++
      if (t.completed) acc.completed++
      if (t.failed) acc.failed++
      return acc
    }, { newTask: 0, active: 0, completed: 0, failed: 0 })
  }

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
        <h4 className='text-sm'>{task.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
      <p className='text-sm mt-2'>{task.taskDescription}</p>
      <div className='flex justify-between mt-6 '>
        <button onClick={markComplete} className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
        <button onClick={markFailed} className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
