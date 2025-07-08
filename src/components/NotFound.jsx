import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div
            style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Segoe UI, Arial, sans-serif',
                background: 'transparent',
            }}
        >
            <h1 style={{
                fontSize: '6rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#888',
                margin: 0,
            }}>
                404
            </h1>
            <p style={{
                fontSize: '1.2rem',
                color: '#aaa',
                marginTop: '0.5rem',
                marginBottom: '2rem',
                textAlign: 'center',
                maxWidth: 400,
            }}>
                Either the page was not found, or it has not been developed or released yet.<br />
                Please come back later.
            </p>
            <Link
                to="/"
                style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '6px',
                    background: '#222',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    letterSpacing: '0.03em',
                    transition: 'background 0.2s',
                }}
            >
                Go to Home
            </Link>
        </div>
    )
}

export default NotFound