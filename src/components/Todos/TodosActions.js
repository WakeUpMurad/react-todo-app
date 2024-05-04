import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.todosActionContainer}>
      <Button
        title={'Reset todos'}
        onClick={resetTodos}
      >
        <RiRefreshLine className={styles.refreshLine} />
      </Button>
      <Button
        title={'Delete Completed'}
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line className={styles.deleteIcon} />
      </Button>
    </div>
  )
}
export default TodosActions
