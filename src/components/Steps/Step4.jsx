import "../../style/Steps/Step4.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function Step4({handleBack, handleNext, setIndex}) {
    const button = useSelector(state => state.button);
    const plan = useSelector(state => state.plan);
    const onlineService = useSelector(state => state.onlineService);
    const largerStorage = useSelector(state => state.largerStorage);
    const customizableProfile = useSelector(state => state.customizableProfile);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let to = 0;
        to += Number(plan.cost.substring(1, (plan.cost.length - 3)));

        if (button) {

            if (onlineService) to += 10;
            if (largerStorage) to += 20;
            if (customizableProfile) to += 20;


        } else {

            if (onlineService) to += 1;
            if (largerStorage) to += 2;
            if (customizableProfile) to += 2;

        }

        setTotal(to);

    }, []);


    return (
        <>
        <div className="Step4">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>

            <div className="check-confirm">
                <div className="main-plan">
                    <div>
                        <p>{plan.type} ({button ? "Yearly" : "Monthly"})</p>
                        <button onClick={() => setIndex(1)}>Change</button>
                    </div>
                    <p className="cost">{plan.cost}</p>
                </div>
                {(onlineService || largerStorage || customizableProfile)&&
                <p style={
                    {
                        height: "1px",
                        width: "calc(100% - 40px)",
                        backgroundColor: "hsl(231, 11%, 90%)",
                        marginLeft: "20px"
                    }
                }></p>
                }
                <div className="sub-plan">
                    {
                        onlineService &&
                        <div className="item">
                            <p>Online service</p>
                            <p>+${button ? "10" : "1"}/{button ? "yr" : "mo"}</p>
                        </div>
                    }

                    {
                        largerStorage &&
                        <div className="item">
                            <p>Larger storage</p>
                            <p>+${button ? "20" : "2"}/{button ? "yr" : "mo"}</p>
                        </div>
                    }

                    {
                        customizableProfile &&
                        <div className="item">
                            <p>Customizable profile</p>
                            <p>+${button ? "20" : "2"}/{button ? "yr" : "mo"}</p>
                        </div>
                    }
                </div>
            </div>
            <div className="total">
                <p>Total({button ? "per year" : "per month"})</p>
                <h4>+${total}/{button ? "yr" : "mo"}</h4>
            </div>
        </div>
            <button onClick={handleBack} className="back">Go Back</button>
            <button onClick={handleNext} className="next">Confirm</button>
        </>
    );
}

export default Step4;

