import './style.scss'
const Input = ({label,...props}) => {
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  )
}

export default Input