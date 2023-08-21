import React from 'react'

export default function ReusabilityBlogInput(props) {

  const {type,classNameProps,id,name,placeholder,onChange,required,autoFocus,errors}=props;
  //bootstrap validation
  const className=errors?"form-control is-invalid":"form-control";
  return (
    <React.Fragment>
     <div className="form-group mb-4">
            <label htmlFor={id}>{placeholder}</label>
            <input
              type={type}
              className={classNameProps}
              id={id}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={onChange}
            />
          </div>
          <span className="text-danger">{errors}</span>
    </React.Fragment>
  )
}
