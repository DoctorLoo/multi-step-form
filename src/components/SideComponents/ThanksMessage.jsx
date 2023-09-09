import "../../style/SideComponents/ThanksMessage.css";
import icon from "../../assets/images/icon-thank-you.svg";

function ThanksMessage() {
    return (
        <>
            <div className="ThanksMessage">
                <img src={icon} alt=""/>
                <h2>Thank you!</h2>
                <p>
                    Thanks for confirming your subscription! We hope have fun
                    using our platform. If you ever need support, please feel
                    free to email us at support@loremgaming.com.
                </p>
            </div>
            <p className="hiding-line"></p>
        </>
    );
}

export default ThanksMessage;