import React from 'react'

function Form({values, formChange, formSubmit}) {

  const onChange = (e) => {
    const {name, value} = e.target;

    formChange(name, value)
  }

  const onSubmit = (e) => {
    console.log(e)
  }


  return (
    <div>
      <form className="coolForm" onSubmit={onSubmit}>

        <label>
          Name:
          <input type="text" name="name" value={values.name} onChange={onChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={values.email} onChange={onChange} />
        </label>

        <label>
          Role:
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">----</option>
            <option value="student">Student</option>
            <option value="Mentor">Mentor</option>
            <option value="Pro">Pro Coder</option>
          </select>
        </label>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form
