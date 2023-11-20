import SignUpImage from "../assets/images/illustration-sign-up-desktop.svg";
import SignUp from "../components/signup-page/signup-page";
import SuccessPage from "./successpage/successpage.component";
const Newletter = () =>{
    return(
        <div>
            <div>
                <h1>Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on </p>
                <p>Product discovery and building what matters</p>
                <p>And much more!</p>

                <SignUp />
                
                <SuccessPage />
            </div>
            <img src={SignUpImage} />
        </div>
    )
}

export default Newletter;