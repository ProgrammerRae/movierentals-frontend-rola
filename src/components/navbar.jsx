import { useEffect, useState } from 'react'
import './navbar.css'
import cartIcon from '../assets/icons/cart.svg'
import userIcon from '../assets/icons/user-circle.svg';
import { getUser } from '../api/user';

export default function NavBar(){
    const [currentUser, setCurrentUser]= useState({});
    useEffect(()=>{
        const fetchUser = () => {
            getUser().then(user=>{
                setCurrentUser(user)
                console.log("user log in: ", user.username)
        })
            .catch(err=> {
                console.log("user", err);
            })
          };
          fetchUser();       
    }, [currentUser])
    console.log("currentUser:", currentUser)
    const hasUser = ()=>{
        if(currentUser&& currentUser.user){
        return (
            <div className='options'>
                <a id='userProf'>
                    <img src={userIcon} alt="open userInfo"/>
                </a>
                <label className='userInfo' htmlFor='userProf'>{currentUser.user.username}</label>
                <a href='/carts' className="cartlink">
                    <img src={cartIcon} alt="open cart"/>
                </a>
            </div>
        )
        }
    }
    const noUser = () => {
        return (
            <div className='options'>
                <a className="loglink" href='/accounts/login'>Login</a>
                <a className="cartlink" href='/accounts/login' >
                    <img src={cartIcon} alt="open cart"/>
                </a>
            </div>
        )
    }
    return (
        <div className='nav-bar'>
            <div className='logo-container'>
                <h3>RENTALS</h3>
            </div>
            <div className="navigation">
                <a href="/">Home</a>
                <a href="/movies">Movies</a>
                <a href="/favorites">Favorites</a>
                <a href="/rentals">My Rentals</a>
            </div>
            {currentUser? hasUser():noUser()}
        </div>
    )
}