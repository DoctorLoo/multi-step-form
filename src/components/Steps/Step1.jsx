import "../../style/Steps/Step1.css"
import {useDispatch, useSelector} from "react-redux";
import {setName} from "../../Store/Reducers/step1Reducers/nameReducer";
import {setEmail} from "../../Store/Reducers/step1Reducers/emailReducer";
import {setPhone} from "../../Store/Reducers/step1Reducers/phoneReducer";

function Step1({handleNext}) {

    const dispatch = useDispatch();

    const name = useSelector(state => state.name);
    const email = useSelector(state => state.email);
    const phone = useSelector(state => state.phone);

    const clearValidations = (id) => {
        document.querySelector(`#${id}`).style.border = "1px solid hsl(231, 11%, 63%)";
        document.querySelector(`.invalid-${id}`).style.opacity = "0";
    }

    const validations = () => {
        let nameVal, emailVal, phoneVal;

        if (name) {
            nameVal = true;
        } else {
            document.querySelector("#name")
                .style.border = "1px solid hsl(354, 84%, 57%)";
            document.querySelector(".invalid-name").style.opacity = "1";
        }

        if (email) {
            emailVal = true;
        } else {
            document.querySelector("#email")
                .style.border = "1px solid hsl(354, 84%, 57%)";
            document.querySelector(".invalid-email").style.opacity = "1";
        }

        if (phone) {
            phoneVal = true;
        } else {
            document.querySelector("#phone")
                .style.border = "1px solid hsl(354, 84%, 57%)";
            document.querySelector(".invalid-phone").style.opacity = "1";
        }

        if (nameVal && emailVal && phoneVal) {
            handleNext();
        }

    }


    return (
        <>
            <div className="Step1">

                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>

                <label htmlFor="name" className="step1-label">
                    <div>
                        <p className="label">Name</p>
                        <p className="invalid invalid-name">This field is required</p>
                    </div>
                </label>
                <input type="text" id="name" placeholder="e.g. Abdullah Alashhab"
                       onChange={(e) => dispatch(setName(e.target.value))}
                       value={name}
                       onClick={() => clearValidations("name")}
                />

                <label htmlFor="email" className="step1-label">
                    <div>
                        <p className="label">Email Address</p>
                        <p className="invalid invalid-email">This field is required</p>
                    </div>
                </label>
                <input type="text" id="email" placeholder="e.g. abdullahalashhab@lorem.com"
                       onChange={(e) => dispatch(setEmail(e.target.value))}
                       value={email}
                       onClick={() => clearValidations("email")}
                />

                <label htmlFor="phone" className="step1-label">
                    <div>
                        <p className="label">Phone Number</p>
                        <p className="invalid invalid-phone">This field is required</p>
                    </div>
                </label>

                <input type="number" id="phone" placeholder="e.g. +1 234 567 890"
                       onChange={(e) => dispatch(setPhone(e.target.value))}
                       value={phone}
                       onClick={() => clearValidations("phone")}
                />

            </div>
            <button onClick={validations} className="next">Next Step</button>
        </>
    );
}

export default Step1;