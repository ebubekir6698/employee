import { useEffect, useState } from 'react';

import './Level.css';

import Employee from '../Employee/Employee';

function Level(props) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const employeeList = [];

        for(let i = 0, len = props.employees.length; i < len; i++){
            const person = props.employees[i];

            console.log(person);
    
            const employee = (
                <Employee
                    key={person.id}
                    firstName={person.firstName}
                    lastName={person.lastName}
                    role={person.role}
                    picture={person.picture}
                />
            );
    
            employeeList.push(employee);
        }
        
        setEmployees(employeeList);
    }, []);

    return (
        <div className='Level'>
            {employees}
        </div>
    );
}
  
export default Level;