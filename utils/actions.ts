'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const completeToDo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true
    }
  })
}

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content')
    }
  })

  revalidatePath('/todos')
}