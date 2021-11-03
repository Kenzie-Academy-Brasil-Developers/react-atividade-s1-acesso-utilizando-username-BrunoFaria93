const Form = ({ user, setIsLoggedIn }) => {
    console.log(user)
    function HandleLogout(){
        setIsLoggedIn(false)
    }
        return (
            <div>
                <h1>Bem-vindo, {user}</h1>
                <button className='button-2'onClick={() => HandleLogout()}>Sair</button>
            </div>
        )
    }




export default Form