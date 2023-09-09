import "../../style/SideComponents/ToggleButton.css";
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "../../Store/Reducers/step2Reducers/buttonReducer";
import {setPlan} from "../../Store/Reducers/step2Reducers/planReducer";


function ToggleButton() {
    const button = useSelector(state => state.button);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggle());
        dispatch(setPlan({}));
    }

    return (
        <>

            <button className="ToggleButton">
                <span className="Monthly" style={
                    {
                        color: button ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"
                    }
                }>Monthly</span>
                <span style={
                    {
                        width: "50px",
                        height: "25px",
                        backgroundColor: "hsl(213, 96%, 18%)",
                        borderRadius: "50vh",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer"
                    }
                } onClick={handleClick}>
                    <span className="circle" style={
                        {
                            width: "15px",
                            aspectRatio: 1,
                            backgroundColor: "hsl(0, 0%, 100%)",
                            borderRadius: "50px",
                            transitionDuration: "400ms",
                            marginLeft: button ? "30px" : "5px"
                        }
                    }></span>
                </span>
                <span className="Yearly" style={
                    {
                        color: button ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"
                    }
                }>Yearly</span>
            </button>


        </>
    );
}

export default ToggleButton;