import "./toggle.css"
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Toggle = () => {
    const theme = useContext(ThemeContext);
    
    const handleClick = () => {
      theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className="Toggle">
            <img src={Sun} alt="photo of sun" className="Toggle-Icon" />
            <img src={Moon} alt="photo of Moon" className="Toggle-Icon" />
            <div className="Toggle-Button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}


export default Toggle