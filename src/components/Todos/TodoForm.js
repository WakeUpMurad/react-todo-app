import { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onInputHandler = (event) => {
    setText(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form
      className={styles.todoForm}
      onSubmit={onSubmitHandler}
    >
      <Input
        text={text}
        onChange={onInputHandler}
      />
      <Button
        type={'submit'}
        title={'Submit'}
      >
        Submit
      </Button>
    </form>
  )
}

export default TodoForm
