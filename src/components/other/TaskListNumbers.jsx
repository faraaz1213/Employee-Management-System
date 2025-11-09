import React from "react";

// compute counts from employee.tasks to ensure live accuracy
const computeCounts = (tasks) => {
  return tasks.reduce((acc, t) => {
    if (t.newTask) acc.newTask++
    if (t.active) acc.active++
    if (t.completed) acc.completed++
    if (t.failed) acc.failed++
    return acc
  }, { newTask: 0, active: 0, completed: 0, failed: 0 })
}

const TaskListNumbers = ({ data }) => {
  if (!data) return null
  const counts = computeCounts(data.tasks || [])

  return (
    <div className="flex gap-5 mt-10">
      <div className="bg-blue-500 p-5 rounded w-1/4">
        <h2 className="text-xl font-bold">New Task</h2>
        <p className="text-3xl mt-2">{counts.newTask}</p>
      </div>

      <div className="bg-yellow-500 p-5 rounded w-1/4">
        <h2 className="text-xl font-bold">Active Task</h2>
        <p className="text-3xl mt-2">{counts.active}</p>
      </div>

      <div className="bg-green-500 p-5 rounded w-1/4">
        <h2 className="text-xl font-bold">Completed</h2>
        <p className="text-3xl mt-2">{counts.completed}</p>
      </div>

      <div className="bg-red-500 p-5 rounded w-1/4">
        <h2 className="text-xl font-bold">Failed</h2>
        <p className="text-3xl mt-2">{counts.failed}</p>
      </div>
    </div>
  )
}

export default TaskListNumbers
