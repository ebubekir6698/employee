import './Employee.css';

function Employee(props) {
    return (
        <div className="Employee">
            <img
                src={props.picture}
                height='200'
            />
            <h4>Full Name: {props.firstName} {props.lastName}</h4>
            <h5>Role: {props.role}</h5>
        </div>
    );
  }
  
  export default Employee;