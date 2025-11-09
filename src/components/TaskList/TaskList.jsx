import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  // data is the employee object (loggedInUserData)
  if (!data || !data.tasks) return null

  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      {data.tasks.map((task, idx) => {
        const commonProps = { task, employeeId: data.id, taskIndex: idx }
        if (task.active) return <AcceptTask key={idx} {...commonProps} />
        if (task.newTask) return <NewTask key={idx} {...commonProps} />
        if (task.completed) return <CompleteTask key={idx} {...commonProps} />
        if (task.failed) return <FailedTask key={idx} {...commonProps} />
        return null
      })}
    </div>
  )
}

export default TaskList
