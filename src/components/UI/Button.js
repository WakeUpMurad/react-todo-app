import styles from './Button.module.css'

const Button = ({ children, disabled = false, ...props }) => {
  return (
    <button
      {...props}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
