import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import * as Icon from 'react-feather';

const Login: React.FC = () => {
    const { isAuthenticated, loginWithEmail, loginAsGuest } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            loginWithEmail(email);
        }
    };

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--c-bg-main)',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <div style={{
                background: 'var(--c-bg-card)',
                padding: '40px',
                borderRadius: '24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                textAlign: 'center',
                maxWidth: '400px',
                width: '100%'
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'var(--c-primary)',
                    borderRadius: '16px',
                    display: 'grid',
                    placeItems: 'center',
                    margin: '0 auto 24px auto',
                    color: 'white'
                }}>
                    <Icon.Feather size={32} />
                </div>

                <h1 style={{ margin: '0 0 8px 0', fontSize: '24px' }}>Welcome to LifeMirror</h1>
                <p style={{ margin: '0 0 24px 0', color: 'var(--c-text-muted)' }}>
                    Sign in to access your personal workspace.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: '1px solid var(--c-border, #e2e8f0)',
                            fontSize: '14px',
                            outline: 'none'
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: '1px solid var(--c-border, #e2e8f0)',
                            fontSize: '14px',
                            outline: 'none'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '12px',
                            borderRadius: '12px',
                            border: 'none',
                            background: 'var(--c-primary)',
                            color: 'white',
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginTop: '8px'
                        }}
                    >
                        Sign In
                    </button>
                </form>

                <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
                    <span style={{ fontSize: '12px', color: 'var(--c-text-muted)' }}>OR</span>
                    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
                </div>

                <button
                    onClick={loginAsGuest}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '12px',
                        border: '1px solid var(--c-border, #cbd5e1)',
                        background: 'transparent',
                        color: 'var(--c-text-main)',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                >
                    Continue as Guest
                </button>
            </div>
        </div>
    );
};

export default Login;

