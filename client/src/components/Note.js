const Note = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='form-row-note'>
        <label htmlFor={name} className='form-label-note'>
          {labelText || name}
        </label>
        <textarea
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input-note'
        />
      </div>
    )
  }
  
  export default Note
  