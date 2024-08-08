import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as regular from '@fortawesome/free-regular-svg-icons'

const ContactMe = () => {
  return (
    <>
    <div className="contact">
      <form >
        <hr />
        <h1>Questions, Concerns, Requests?</h1>
        <h2 className="footer">Contact Me</h2>
        <div className="cm-input"> <FontAwesomeIcon icon={regular.faUser} /><input type='text' placeholder="Name:" /></div>
        <div className="cm-input"> <FontAwesomeIcon icon={regular.faEnvelope} /><input type='email' placeholder="Email:" /></div>
        <div className="cm-input"> <FontAwesomeIcon icon={regular.faPenToSquare} /><input type='text' placeholder="Message:" /></div>
        <button className="cm-button">Submit</button>
      </form>
      <hr className="hr2" />
      <p className='footer'>Send me a message <a href="_blank">email@email.com</a></p>
    </div>
      <p className="developed">This site was developed by <a href="_blank" >Jessica Zimmerman</a></p>

    </>
  )
}
export default ContactMe