import "../../style/Steps/Step2.css";
import ToggleButton from "../SideComponents/ToggleButton";
import month from "../../data/planMonthly.json";
import year from "../../data/planYearly.json";
import {useEffect, useState} from "react";
import PlanStep2 from "../Plans/PlanStep2";
import {useSelector} from "react-redux";


function Step2({handleNext, handleBack}) {
    const button = useSelector(state => state.button);
    const plan = useSelector(state => state.plan);
    const [plans, setPlans] = useState(year);
    const validations = () => {

        if (plan.type) {
            handleNext();
        } else {
            document.querySelectorAll(".Step2 .plans .plan").forEach((plan) => {
                plan.style.borderColor = "hsl(354, 84%, 57%)";
            });
        }


    }


    useEffect(() => {

        const selectedPlan = plan.type === "Arcade" ? 0 : plan.type === "Advanced" ? 1 : plan.type === "Pro" ? 2 : undefined;

        if (selectedPlan) {
            document.querySelectorAll(".Step2 .plans .plan")[selectedPlan].style.borderColor = "hsl(243, 100%, 62%)";
            document.querySelectorAll(".Step2 .plans .plan")[selectedPlan].style.backgroundColor = "hsl(243, 100%, 98%)";
        }

        if (button) {
            setPlans(year);
        } else {
            setPlans(month);
        }


    }, [button]);


    return (<>
            <div className="Step2" id="Step2">
                <h1>Select your plan</h1>
                <p>You have option of monthly or yearly billing.</p>

                <div className="plans">

                    {
                        plans.map((plan) => {

                            const icon =
                                require(`../../assets/images/${plan.icon}`);

                            return <PlanStep2 icon={icon}
                                              title={plan.title}
                                              price={plan.price}
                                              bonus={plan.bonus}
                                              key={plan.id}
                            />

                        })
                    }


                </div>

                <ToggleButton/>

            </div>
            <button onClick={handleBack} className="back">Go Back</button>
            <button onClick={validations} className="next">Next Step</button>
        </>
    );
}

export default Step2;