import SuccessPage from "../successpage/successpage.component"
import SignUpImage from "../../assets/images/illustration-sign-up-desktop.svg";
import SignUp from "../signup-page/signup-page";
import IconList from "../../assets/images/icon-list.svg";
import "./newsletter.styles.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Newletter = () =>{
    const {successMessage} = useContext(UserContext);
    return(
        <div className="newsletter-container">
        {successMessage ? (
            <div className="success-letter">
                <SuccessPage/>
            </div>
        ) : (
            <div className="newsletter">
            <div className="side-letter">
                <h1>Stay Updated!</h1>
                <h2> 60,000+ product managers receiving monthly updates on</h2>
                <p ><img src={IconList}/>Join Product discovery and building what matters</p>
                <p><img src={IconList}/>Join Measuring to ensure updates area a success</p>
                <p><img src={IconList}/>Join And much more!</p>
                <SignUp />
            </div>
            <div className="img">
            <img className="newsletter-img" src={SignUpImage} alt="Sign Up"/>
            </div>
          </div>
        
        )}
  

      </div>
    )
}

export default Newletter;