import { useState } from "react"

const GetUserComponent = ({ setUser, setIsLoggedIn }) =>{
    const [userInput, setUserInput] = useState('')
    
    function HandleLogin(userInput){
        setUser(userInput)
        setIsLoggedIn(true)
    }
    return(

        <div className='container'>
            <input 
                type='text'
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}   
        />
            <button className='button-1'onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
        </div>
        )
    }


export default GetUserComponent