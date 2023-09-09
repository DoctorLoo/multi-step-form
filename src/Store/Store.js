import {configureStore} from "@reduxjs/toolkit";
import buttonReducer from "./Reducers/step2Reducers/buttonReducer";
import nameReducer from "./Reducers/step1Reducers/nameReducer";
import emailReducer from "./Reducers/step1Reducers/emailReducer";
import phoneReducer from "./Reducers/step1Reducers/phoneReducer";
import planReducer from "./Reducers/step2Reducers/planReducer";
import largeStorageReducer from "./Reducers/step3Reducers/largerStorageReducer";
import onlineServicesReducer from "./Reducers/step3Reducers/onlineServiceReducer";
import customizeProfileReducer from "./Reducers/step3Reducers/customizableProfileReducer";
export const store = configureStore({
    reducer: {
        button: buttonReducer,
        name: nameReducer,
        email: emailReducer,
        phone: phoneReducer,
        plan: planReducer,
        largerStorage: largeStorageReducer,
        onlineService: onlineServicesReducer,
        customizableProfile: customizeProfileReducer
    }
});
