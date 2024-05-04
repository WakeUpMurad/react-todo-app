import styles from './Input.module.css'

const Input = ({ text, onChange }) => {
  return (
    <input
      placeholder="Enter new todo"
      className={styles.todoFormInput}
      value={text}
      onChange={onChange}
    />
  )
}

export default Input
