import { useContext } from "react"

import { UserContext } from "../context/UserContext"

const SuccessPage = () => {
    const { currentUser } = useContext(UserContext)
  return (
        currentUser && (
            <div>
            <h1>Thanks for subscribing</h1>
            <p>A confirmation emil has been sent to{currentUser.email}. Please open
            it and click the button inside to confirm your subscription</p>
            <button>Dismiss message</button>
            </div>
            
        
        )
  )
}
export default SuccessPage;