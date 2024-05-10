'use client'
import { completeToDo } from "@/utils/actions"
import { useTransition } from "react"


const ToDo = ({ todo }) => {

  const [isPending, startTransition] = useTransition()

  return (
    <div onClick={() => startTransition(() => completeToDo(todo.id))}
         className={`cursor-pointer ${todo.completed ? 'line-through text-gray-900' : ''}`}>
      {todo.content}
    </div>
  )
}

export default ToDo;
