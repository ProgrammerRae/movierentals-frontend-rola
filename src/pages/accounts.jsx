import SignUp from "../components/signup";
import LogIn from "../components/login";
import './account.css'
import { useState } from "react";

export default function Accounts(){  
    const [isLogin, setLogin] = useState(true)
    const login = ()=> {
        return(<><LogIn/>
                <button className='changer' onClick={()=>setLogin(false)}>Doesn't have an account yet?</button>
                </> )
    }
    const signup = ()=>{
        return(<><SignUp/><button className='changer' onClick={()=>setLogin(true)}>Have an Account already?</button></>)
    }  
    return(
        <div className="account-container">
            <div className="account-card">
            {isLogin? login(): signup()}
            </div>
        </div>
    )
}