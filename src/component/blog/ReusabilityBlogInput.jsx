import React from 'react'

export default function ReusabilityBlogInput(props) {

  const {type,className,id,name,placeholder,onChange,required,autoFocus}=props;
  
  return (
    <React.Fragment>
     <div className="form-group mb-4">
            <label htmlFor={id}>{placeholder}</label>
            <input
              type={type}
              className={className}
              id={id}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={onChange}
            />
          </div>
    </React.Fragment>
  )
}
