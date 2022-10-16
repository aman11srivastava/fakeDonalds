import React from 'react'

const Input = ({ label, onChange, value, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={props?.type ? props.type : "text"} value={value} onChange={onChange} {...props} />
    </div>
  )
}

export default Input
