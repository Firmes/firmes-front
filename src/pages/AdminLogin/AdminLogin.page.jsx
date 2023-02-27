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

    return (
        <>
            <div>
                <form>
                    <div>
                        <input type="text" placeholder='Enter username' />
                        <input type="password" placeholder='Enter password' />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminLoginPage;