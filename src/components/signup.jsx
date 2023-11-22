import { useState } from "react";
import { signUpUser } from "../api/user";

export default function SignUp(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [fname, setFName] = useState('')
    const [mname, setMName] = useState('')
    const [lname, setLName] = useState('')

    const handleSubmit= () =>{
        signUpUser(username,email,fname,mname,lname,password);
    }
    return (
        <div className="signup-container">
            <form className= 'signup-form-container' onSubmit={()=>handleSubmit()}>
                <h1>SIGN UP</h1>
                <fieldset className="field-one">
                    <legend>Account</legend>
                    <label htmlFor="s-user">Username:</label>
                    <input type="text" id="s-user" value={username} onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="s-email">Email:</label>
                    <input type="email" id="s-email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="s-pass"> Password:</label>
                    <input type="password" id="s-pass" value={password} onChange={e => setPassword(e.target.value)} />
                </fieldset>
               
                <fieldset className="field-two">
                    <legend>Personal</legend>
                    <label>First Name:</label>
                    <input type="text" value={fname} onChange={e => setFName(e.target.value)} />
                    <label>Middle Name:</label>
                    <input type="text" value={mname} onChange={e => setMName(e.target.value)} />
                    <label>Last Name:</label>
                    <input type="text" value={lname} onChange={e => setLName(e.target.value)} />
                </fieldset>
                <input type="submit" value="Signup" className="signup-btn"/>
            </form>
        </div>
    );
}