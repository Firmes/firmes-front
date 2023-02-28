import React, { useRef, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import DataService from '../../data-service/DataService';

function AdminLoginPage() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isNewAccount, setIsNewAccount] = useState(useLocation().state);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dataService = new DataService();

    useEffect(() => {

        if (user == 401 || user == 400) {
            setError(true);
            setIsLoading(false);

        } else if (user) {
            setError(false);
            navigate('/all-projects', {replace: true})
        }

    }, [user])

    function handleLogin(e) {
        e.preventDefault();

        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordRef.current.value)) {
            setError(false);

            if (isNewAccount) {
                alert('Account created!')
                dataService.signup(usernameRef.current.value, passwordRef.current.value).then((response) => setUser(response))
            } else {
                alert('Welcome!')
                dataService.login(usernameRef.current.value, passwordRef.current.value).then((response) => setUser(response));
            }

        } else {
            setError(true);
        }
    }

    function handleCreateAccount(e) {
        e.preventDefault();
        navigate('/admin-create', { state: true, replace: true })
        window.location.reload();
    }

    return (
        <>
            <div className="w-full h-full flex flex-col self-center pt-36">
                {
                    isNewAccount ?

                        <span className="self-center">Create New Account</span>
                        :
                        <span className="self-center">Login</span>

                }
                <form className="flex justify-center flex-col">
                    <div className="flex flex-col items-center">
                        <input className="py-3 my-3 w-1/4" type="text" placeholder='Enter username' name='usernameRef' ref={usernameRef} />
                        <input className="py-3 my-3 w-1/4" type="password" placeholder='Enter password' name='passwordRef' ref={passwordRef} />
                        <span>Password must contain at least one number, symbol, capital letter, and must be 8 character minimum.</span>
                    </div>
                    <div className="flex flex-col items-center">
                        {
                            error ?
                                <span>Username and/or Password is not valid, please check and try again.</span>
                                :
                                null
                        }
                        {
                            isNewAccount ?
                                <>
                                    <button className="py-3 my-5 hover:text-sky-500" onClick={handleLogin}>Submit</button>
                                </>

                                :

                                <>
                                    <button className="py-3 my-5 hover:text-sky-500" onClick={handleLogin}>Submit</button>
                                    <button className="py-1 my-1 hover:text-sky-500" onClick={handleCreateAccount}>Create Account</button>
                                </>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminLoginPage;