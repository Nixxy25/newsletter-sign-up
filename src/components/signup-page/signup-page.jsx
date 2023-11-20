import { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";


const defaultForm = {
    email:"",
}

const SignUp = () => {
    const {displayUser} = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultForm);
    const {email} = formFields;

    console.log(formFields);

    const resetForm = () => {
        setFormFields(defaultForm);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        displayUser(formFields)
        resetForm();
    }
    

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email Address</label>
                <input type="email" onChange={handleChange}
                name="email" value={email} />

                <button type="submit">Subscribe to monthly newslette</button>
            </form>
      
        </div>
    )
}

export default SignUp;