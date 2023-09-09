import "../../style/SideComponents/StepBar.css"
function StepBar(props){
    return (
        <div className="StepBar">
            <h4 style={props.buttonStyle}>{props.number}</h4>
            <div style={{marginLeft: "15px"}}>
               <p>{props.step}</p>
                <h3>{props.header}</h3>
            </div>
        </div>
    );
}

export default StepBar;