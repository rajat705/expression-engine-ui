import React from 'react';
import ExpressionForm from './components/ExpressionForm';
import { Button, Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const handleSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="App">
            <ExpressionForm onSubmit={handleSubmit} />
           
            <footer className='copyright'>
`               <p>&copy; 2024 Rajat Nagar. All rights reserved.</p>`
            </footer>
        </div>
        
    );
}

export default App;