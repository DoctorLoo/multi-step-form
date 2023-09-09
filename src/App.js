import './style/App.css';
import StepBar from "./components/SideComponents/StepBar";
import Step1 from "./components/Steps/Step1";
import {useState} from "react";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";
import Step4 from "./components/Steps/Step4";
import ThanksMessage from "./components/SideComponents/ThanksMessage";
import {useSelector} from "react-redux";


function App() {

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex(prevState => prevState + 1);
    }

    const handleBack = () => {
        setIndex(prevState => prevState - 1);
    }


    const [componentsArray,] = useState([
        <Step1 handleNext={handleNext}/>,
        <Step2 handleNext={handleNext} handleBack={handleBack}/>,
        <Step3 handleNext={handleNext} handleBack={handleBack}/>,
        <Step4 handleNext={handleNext} handleBack={handleBack} setIndex={setIndex}/>,
        <ThanksMessage/>
    ]);

    return (

        <div className="App">
            <div className="container-1">

                <StepBar number="1" step="STEP 1" header="YOUR INFO"
                         buttonStyle=
                             {
                                 index === 0 ? {
                                     backgroundColor: "hsl(228, 100%, 84%)",
                                     border: "none",
                                     color: "hsl(213, 96%, 18%)"
                                 } : {}
                             }
                />
                <StepBar number="2" step="STEP 2" header="SELECT PLAN" index={index}
                         buttonStyle=
                             {
                                 index === 1 ? {
                                     backgroundColor: "hsl(228, 100%, 84%)",
                                     border: "none",
                                     color: "hsl(213, 96%, 18%)"
                                 } : {}
                             }
                />
                <StepBar number="3" step="STEP 3" header="ADD-ONES" index={index}
                         buttonStyle=
                             {
                                 index === 2 ? {
                                     backgroundColor: "hsl(228, 100%, 84%)",
                                     border: "none",
                                     color: "hsl(213, 96%, 18%)"
                                 } : {}
                             }/>
                <StepBar number="4" step="STEP 4" header="SUMMARY" index={index}
                         buttonStyle=
                             {
                                 index === 3 || index === 4 ? {
                                     backgroundColor: "hsl(228, 100%, 84%)",
                                     border: "none",
                                     color: "hsl(213, 96%, 18%)"
                                 } : {}
                             }
                />
            </div>

            <div className="container-2">

                {
                    componentsArray[index]
                }


            </div>

        </div>
    );
}

export default App;
