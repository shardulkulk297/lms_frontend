import React, { useState } from 'react'

const Tasks = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([])

    const add = () => {
        let temp = [...taskList]; //converts the temp into temp Array as we cannot change the taskList directly
        temp.push(task); //pushing it into temp array
        setTaskList(temp); //settint the new temp to main taskList and updating the task list that we wanted to update in the first place.
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>

            <div className="row">
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <label htmlFor="">Enter Task</label><br />
                            <textarea onChange={(e) => setTask(e.target.value)} value={task} />
                            <button onClick={() => add()}>Add Task</button>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                <h1>Your Tasks</h1>
                {
                    taskList.map((t) => (
                        <li key={t}>{t}</li>
                    ))
                }

            </div>
            </div>

        </div>
    )
}

export default Tasks