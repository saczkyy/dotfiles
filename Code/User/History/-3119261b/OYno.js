import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import Employees from './Employees';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from 'react-router-dom';

function Home(){
    let history = useNavigate();

    const handleEdit = (Id, Name, Surname, Age) => {
        localStorage.setItem('Name', Name);
        localStorage.setItem('Surname', Surname);
        localStorage.setItem('Age', Age);
        localStorage.setItem('Id', Id);
    }

    const handleDelete = (Id) => {
        var index = Employees.map(function(e){
            return e.Id
        }).indexOf(Id);

        Employees.splice(index,1);
        history('/');
    }
}