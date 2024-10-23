import { Todo } from "../../types"
import Task from "./Task"


export default async function TodoTable() {
    const response = await fetch('http://localhost:8000/todos/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyYWh1bCIsImV4cCI6MTcyOTY3NTU1NX0.DyD4jFhqi-hlFxvVYJVT9bI6f9LVth0VXkuggiBf9vs'
        }
      })
    const data = await response.json()
    const todo_list : Todo[] = data.sort((a:Todo,b:Todo)=>a.id - b.id)

  return (
    <table className="w-full">
        <thead className="w-full">
            <tr className="w-full flex justify-between items-center px-2 py-1 bg-gray-100 shadow-md">
                <th>Task</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {
                todo_list.map((task:Todo)=>(
                    <Task key={task.id} task={task}/>
                ))
            }

            
        </tbody>
      
    </table>
  )
}
