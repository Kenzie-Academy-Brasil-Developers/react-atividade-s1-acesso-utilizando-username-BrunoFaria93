import './App.css';
import { useState } from 'react';
import Form from './components/WelcomePage';
import GetUserComponent from './components/GetUserComponent'

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const[user, setUser] = useState('')

  console.log(user)
  return (

    <div className="App">
       {isLoggedIn ? (
      <div>
          <Form user={user} setIsLoggedIn={setIsLoggedIn} />
      </div>
        ):(
        <div>
           <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        </div>
        )}
    </div>
  )
}


export default App
      