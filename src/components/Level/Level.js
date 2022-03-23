import { useEffect, useState } from 'react';

import './Level.css';

import Employee from '../Employee/Employee';

function Level({employees}) {
    return (
        <div className='Level'>
            {employees.map(employee => (
                <Employee
                key={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                role={employee.role}
                picture={employee.picture}
            />
            ))}
        </div>
    );
}
  
export default Level;