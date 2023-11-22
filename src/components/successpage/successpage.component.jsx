import { useContext } from "react"

import { UserContext } from "../context/UserContext"
import Icon from "../../assets/images/icon-list.svg";
import "./successpage.styles.css";
const SuccessPage = () => {
    const { currentUser, dissmissUser } = useContext(UserContext)
  return (
        currentUser && (
          <div className="successpage">
            <div className="success">
            <h1><img src={Icon} />Thanks for subscribing</h1>
            <p>A confirmation email has been sent to <span className="span-user">{currentUser.email}</span>. Please open
            it and click the button inside to confirm your subscription</p>
            
            <button className="dismiss-button" onClick={() => dissmissUser(currentUser)}>Dismiss message</button>
            </div>
            </div>
        
        )
  )
}
export default SuccessPage;