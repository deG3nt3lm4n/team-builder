import React, {useState} from 'react'
import './App.css';
import Form from './components/Form';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

const teamMembers = [
  {
    name: 'lyub',
    email: 'em@gm.com',
    role: 'hacker'
  },
  {
    name: 'Chiek',
    email: 'ddbb@gmail.com',
    role: 'chiken wing'
  }
]

function App() {
  const [teamBuilder, setTeamBuilder] = useState(teamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const formChange = (value , name) => {
   setFormValues({
     ...formValues,
     [name]: value
   })
  }

  const formSubmit = () => {
    const newBuilder = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }
    console.log(newBuilder)
  }



  return (
    <div className="App">
      <h1>My little thing</h1>
      <p>Team Builder setup..</p>
      <Form values={formValues} formChange={formChange} formSubmit={formSubmit}/>
    </div>
  );
}

export default App;
