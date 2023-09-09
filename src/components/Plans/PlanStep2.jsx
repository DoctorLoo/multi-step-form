import "../../style/Plans/PlanStep2.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPlan} from "../../Store/Reducers/step2Reducers/planReducer";


function PlanStep2(props) {
    const button = useSelector(state => state.button);
    const dispatch = useDispatch();

    useEffect(() => {
        let plansArray;

        plansArray = [...document.getElementsByClassName("plan")];

        const resetPlans = () => {

            plansArray.forEach((p) => {
                p.style.borderColor = "hsl(231, 11%, 83%)";
                p.style.backgroundColor = "";

            });

        }

        resetPlans();

        plansArray.forEach((plan) => {

            plan.addEventListener('click', () => {

                resetPlans();
                plan.style.borderColor = "hsl(243, 100%, 62%)";
                plan.style.backgroundColor = "hsl(243, 100%, 98%)";

            });
        });

    }, [button]);



    return (

        <div className="plan" style={
            {
                height: button ? "170px" : "150px"
            }
        }
             onClick={() => {
                    dispatch(setPlan({
                        type: props.title,
                        yearlyOrMonthly: button ? "Yearly": "Monthly",
                        cost: props.price
                    }));
                }
             }
        >
            <img src={props.icon} alt=""/>
            <div className="for-mobile">
                <h4>{props.title}</h4>
                <p>{props.price}</p>
                {props.bonus && <p className="bonus">{props.bonus}</p>}
            </div>

        </div>
    );
}

export default PlanStep2;