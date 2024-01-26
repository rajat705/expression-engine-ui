import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import './Expression.css';

function ExpressionForm({ onSubmit }) {
    const [expressions, setExpressions] = useState([]);
    const [connector, setConnector] = useState('AND');
    const [ruleType, setRuleType] = useState('');
    const [operator, setOperator] = useState('');
    const [value, setValue] = useState('');
    const [score, setScore] = useState('');

    const handleAddExpression = () => {
        if (ruleType && operator && value && score) {
            setExpressions([
                ...expressions,
                {
                    key: ruleType.toLowerCase(),
                    output: {
                        value: parseInt(value),
                        operator,
                        score: parseInt(score)
                    }
                }
            ]);
            setRuleType('');
            setOperator('');
            setValue('');
            setScore('');
        }
    };

    const handleDeleteExpression = (index) => {
        const updatedExpressions = [...expressions];
        updatedExpressions.splice(index, 1);
        setExpressions(updatedExpressions);
    };

    const handleSubmit = () => {
        onSubmit({ rules: expressions, combinator: connector });
    };

    return (
      
        <div className='expression-form-container'>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2} className="form-label">
                        Connector
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="select"
                            value={connector}
                            onChange={(e) => setConnector(e.target.value)}
                        >
                            <option value="AND">AND</option>
                            <option value="OR">OR</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                     <Form.Label column sm={2} className="form-label">
                         Rule Type
                     </Form.Label>
                     <Col sm={10}>
                         <Form.Control
                            as="select"
                            value={ruleType}
                            onChange={(e) => setRuleType(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="Age">Age</option>
                            <option value="Credit Score">Credit Score</option>
                            <option value="Account Balance">Account Balance</option>
                        </Form.Control>
                    </Col>

                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2} className="form-label">
                         Operator
                     </Form.Label>
                     <Col sm={10}>
                         <Form.Control
                            as="select"
                            value={operator}
                            onChange={(e) => setOperator(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value=">">{'>'}</option>
                            <option value="<">{'<'}</option>
                            <option value="≥">{'≥'}</option>
                            <option value="≤">{'≤'}</option>
                            <option value="=">{'='}</option>
                        </Form.Control>
                    </Col>
                </Form.Group>    
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                     <Form.Label column sm={2} className="form-label">
                         Value
                     </Form.Label>
                     <Col sm={10}>
                         <Form.Control
                            type="text"
                            placeholder="Value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                     <Form.Label column sm={2} className="form-label">
                         Score
                     </Form.Label>
                     <Col sm={10}>
                         <Form.Control
                            type="text"
                            placeholder="Score"
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <div className="btn-container">
                <Button onClick={handleAddExpression}>Add</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </Form>
        {expressions.map((expression, index) => (
            <div key={index} className="expression-item">
                <span>
                    {expression.key} {expression.output.operator} {expression.output.value} Score: {expression.output.score}
                </span>
                <Button onClick={() => handleDeleteExpression(index)}>Delete</Button>
            </div>
        ))}
       
               
        </div>
        
    );
}

export default ExpressionForm;