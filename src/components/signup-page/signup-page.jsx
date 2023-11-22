import { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";

import "./signup.styles.css";

const defaultForm = {
    email:"",
}

const SignUp = () => {

    const {displayUser} = useContext(UserContext);

    const [formFields, setFormFields] = useState(defaultForm);
    const [formError, setFormError] = useState("");
    const {email} = formFields;

    console.log(formFields);

    const resetForm = () => {
        setFormFields(defaultForm);
        setFormError(defaultForm);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === ""){
            setFormError("Email can not be empty")
        }else{
            displayUser(formFields)
            resetForm();
        }    
    }
    

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
        <div className="sign-up">
            <form onSubmit={handleSubmit}>
            <label className="email">Email Address</label>
            <div>
                <input type="email" 
                placeholder={formError ? formError : ""}
                onChange={handleChange}
                name="email" value={email} 
                className={` input-page ${formError ? "border-red-300" : "border-white-300"}`}
                /> 
            </div>
               
            <button className="signup-button">Subscribe to monthly newsletter</button>
            </form>
      
        </div>
    )
}

export default SignUp;