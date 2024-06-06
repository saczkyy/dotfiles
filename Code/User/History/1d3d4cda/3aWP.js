import React, {useEffect, useState} from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid} from 'uuid';
import {Link, useNavigate} from 'react-router-dom';

function Edit(){
    const[name, setName] = useState('');
    const[surname, setSurname] = useState('');
    const[age, setAge] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.Id;
    }).index0f(id);

    const handleSubmit =(e) => { 
        e.preventDefault();
        
        let a = Employees[index];
        a.Name = name;
        a.Surname = surname;
        a.Age = age;
        
        history("/");
    }
    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setSurname(localStorage.getItem('Surname'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[])

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>

            <Form.Group className="mb-3" controlld="formName">
                <Form.Control type="text" placeholder="Enter name" value={name}
                required onChange={(e) => setName(e.target.value)}>
                </Form.Control>

            </Form.Group>

            <Form.Group className="mb-3" controlld="formSurname">
                <Form.Control type="text" placeholder="Enter surname" value={surname}
                required onChange={(e) => setSurname(e.target.value)}>
                </Form.Control>

            </Form.Group>

            <Form.Group className="mb-3" controlld="formAge">
                <Form.Control type="text" placeholder="Enter age" value={age}
                required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>

            </Form.Group>

            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
    </div>;
}
export default Edit;
