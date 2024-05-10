import db from '@/utils/db'
import ToDoList from '@/components/TodoList'

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const Todos = async () => {
  const todos = await getData();

  return (
    <div>
      THE LIST:
      <ToDoList todos={todos} />
    </div>
  )
}

export default Todos;