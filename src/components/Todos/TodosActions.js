import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({
  resetTodo,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionContainer}>
      <Button onClick={resetTodo} title={'Reset todos'}>
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        title={'Clear completed todos'}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
