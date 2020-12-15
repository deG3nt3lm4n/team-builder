import React, {useState} from 'react'
import './App.css';
import Form from './components/Form';
import Team from './components/Team';

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

  const formChange = (name , value) => {
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
    setTeamBuilder([...teamBuilder, newBuilder])
    setFormValues(initialFormValues)
  }



  return (
    <div className="App">
      <h1>My little thing</h1>
      <p>Team Builder setup..</p>
      <Form values={formValues} formChange={formChange} formSubmit={formSubmit}/>
      <Team teamMemeber={teamBuilder} />
    </div>
  );
}

export default App;
