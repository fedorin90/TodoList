import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todo && todo.length > 0 ? (
        <>
          {todo.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </>
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  )
}

export default TodoList
