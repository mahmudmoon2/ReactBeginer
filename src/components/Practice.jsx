import { useRef } from 'react';

const Practice = () => {
    const fName = useRef(); 
    const lName = useRef();

    const handleClick = () => {
        let firstName = fName.current.value; 
        let lastName = lName.current.value;
        
        alert(firstName + " " + lastName);
    }

    return (
        <div>
            <input ref={fName} type="text" placeholder="First Name" /> <br />
            <input ref={lName} type="text" placeholder="Last Name" /> <br />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default Practice;