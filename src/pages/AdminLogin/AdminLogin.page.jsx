import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataService from '../../data-service/DataService';

function AdminLoginPage() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dataService = new DataService();

    function handleLogin(e) {
        e.preventDefault();
        console.log(usernameRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <div>
                <form>
                    <div>
                        <input type="text" placeholder='Enter username' name={usernameRef} ref={usernameRef}/>
                        <input type="password" placeholder='Enter password' name={passwordRef} ref={passwordRef}/>
                    </div>
                    <div>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminLoginPage;