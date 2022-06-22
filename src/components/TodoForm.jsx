import React, {useId} from 'react'

function TodoForm() {
    const todoId = useId();
  return (
    <form>
      <input type="text" placeholder='add details'/>
      <button>Add</button>
    </form>
  )
}

export default TodoForm