import {  useState } from "react";
import { authenticate } from "../api/user";
import { useNavigate } from "react-router-dom";

export default function LogIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit= (e)=>{
        e.preventDefault();
        authenticate(username, password)
            .then(result => {
                console.log("result: ",result);
                navigate('/movies');
                console.log(username, password);
            })
            .catch(err => {                
                console.log("Log in Failed");
            }
                )
    }
    return(
        <div className="log-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="unameid">Username:</label>
                <input type="text" id="unameid" value={username} onChange={e => setUsername(e.target.value)} />
                <label htmlFor="passID">Password:</label>
                <input id="passID" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Login" className="login-btn" />
            </form>
        </div>
    )
}