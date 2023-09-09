import "../../style/Plans/PlanStep3.css"
import {useDispatch, useSelector} from "react-redux";
import {toggleOnlineService} from "../../Store/Reducers/step3Reducers/onlineServiceReducer";
import {toggleLargerStorage} from "../../Store/Reducers/step3Reducers/largerStorageReducer";
import {toggleCustomizableProfile} from "../../Store/Reducers/step3Reducers/customizableProfileReducer";
import {useEffect, useState} from "react";


function PlanStep3({header, details, cost}) {
    const dispatch = useDispatch();

    const onlineService = useSelector(state => state.onlineService);
    const largerStorage = useSelector(state => state.largerStorage);
    const customizableProfile = useSelector(state => state.customizableProfile);

    const [dimensions,setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });


    const checkToggle = () => {

        switch (header) {
            case "Online service":
                dispatch(toggleOnlineService());
                break;
            case "Larger storage":
                dispatch(toggleLargerStorage());
                break;
            case "Customizable profile":
                dispatch(toggleCustomizableProfile());
                break;
            default:
                console.log(Error("Error"));
        }

    }

    return (
        <div className="PlanStep3">
            <input type="checkbox" onChange={checkToggle}
                   checked={
                       header === "Online service" ?
                           onlineService : header === "Larger storage" ?
                               largerStorage : customizableProfile
                   }
            />
            <div className="row">
                <h3 className="header">{header}</h3>
                <p className="details">{details}</p>
            </div>
            <p className="cost">{cost}</p>
        </div>
    );
}

export default PlanStep3;