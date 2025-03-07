import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const LoginPage = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const navigate = useNavigate();

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/welcome');
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <h2>Debounced Search</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Type to search..."
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
            <div>
                <h3>Search Results:</h3>
                <ul>
                    {debouncedQuery && <li>{debouncedQuery}</li>}
                </ul>
            </div>
        </div>
    );
};

export default LoginPage;
