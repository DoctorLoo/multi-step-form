import "../../style/Steps/Step3.css";
import PlanStep3 from "../Plans/PlanStep3";
import {useSelector} from "react-redux";

function Step3({handleNext, handleBack}) {

    const button = useSelector(state => state.button);

    return (
        <>
        <div className="Step3">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>

            {/*header, details, cost*/}
            <PlanStep3
                       header="Online service"
                       details="Access to multiplayer games"
                       cost={button ? "+$10/yr" : "+$1/mo"}
            />
            <PlanStep3
                       header="Larger storage"
                       details="Extra 1TB of cloud save"
                       cost={button ? "+$20/yr" : "+$2/mo"}
            />
            <PlanStep3
                       header="Customizable profile"
                       details="Custom theme on your profile"
                       cost={button ? "+$20/yr" : "+$2/mo"}
            />
        </div>
            <button onClick={handleBack} className="back">Go Back</button>
            <button onClick={handleNext} className="next">Next Step</button>
        </>



    );
}

export default Step3;