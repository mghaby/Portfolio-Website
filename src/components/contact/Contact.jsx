import "./contact.css"
import Email from "../../images/email.png"
import LinkedIn from "../../images/linkedin.png"
import PDF from "../../images/pdf.png"
import Resume from "../../docs/Resume_MarkGhaby.pdf"

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
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
                            <a href={Resume} download>
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
                        <input type="text" placeHolder="Name" name="user_name"></input>
                        <input type="text" placeHolder="Subject" name="user_subject"></input>
                        <input type="text" placeHolder="Email" name="user_email"></input>
                        <textarea rows="5" placeHolder="Message" name="message"/>
                        <button>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact