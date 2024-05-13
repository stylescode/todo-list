import NewTodoForm from "@/components/NewTodoForm"
import React from "react"

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewTodoForm />
      {children}
    </div>
  )
}

export default DashLayout