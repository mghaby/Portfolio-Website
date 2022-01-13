import "./contact.css"
import Email from "../../images/email.png"
import LinkedIn from "../../images/linkedin.png"
import PDF from "../../images/pdf.png"
import Resume from "../../docs/Resume_MarkGhaby.pdf"
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value="")
        )

        Array.from(document.querySelectorAll('textarea')).forEach(
            input => (input.value="")
        )
    }

    return(
        <div className="Contact">
            <div className="Contact-Background"></div>
            <div className="Contact-Wrapper">
                <div className="Contact-Left">
                    <h1 className="Contact-Title">Contact Me!</h1>
                    <div className="Contact-Info">
                        <div className="Contact-Info-Item">
                            <img src={Email} alt="email icon" className="Contact-Icon" /> mark.ghaby71@gmail.com
                        </div>

                        <div className="Contact-Info-Item">
                            <a href="https://www.linkedin.com/in/mghaby/" target="_blank" rel="noreferrer">
                            <img src={LinkedIn} alt="linkedIn icon" className="Contact-Icon" />Click Here
                            </a>
                        </div>

                        <div className="Contact-Info-Item">
                            <a href="https://drive.google.com/file/d/1kB-mbDqA_iW3VAwaMF9aqf51ZJW1PhmG/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img src={PDF} alt="pdf icon" className="Contact-Icon" />Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Contact-Right">
                    <p className="Contact-Description">
                        <b>Interested?</b> Feel free to contact me through the form below
                        or the links on the left.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeHolder="Name" name="user_name"></input>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeHolder="Subject" name="user_subject"></input>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeHolder="Email" name="user_email"></input>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeHolder="Message" name="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact