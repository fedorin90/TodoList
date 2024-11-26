import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addNewTodo }) {
  const [inputValue, setInputValue] = useState('')

  // Обрабатываем изменение ввода
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  // Обрабатываем отправку формы
  const onSubmitHandler = (event) => {
    event.preventDefault() // предотвращаем перезагрузку страницы
    addNewTodo(inputValue) // передаем значение родителю
    setInputValue('') // Очищаем поле ввода после отправки
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
