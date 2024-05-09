import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {

  return (
    <div>
      <form action={newTodo}>
        <input type="text" className="border border-black"/>
      </form>
    </div>
  )
}

export default NewTodoForm