

export const ADD_FEATURE = "ADD_FEATURE";

export const AddNewFeature = (feature) => {
    console.log("Action Call: ", feature)
    return{   
        type: ADD_FEATURE, 
        payload: feature    
    };
};


export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const RemoveExistingFeature = (feature) => {
    console.log("REMOVE ACTION CALL: ", feature)
    return{
        type: REMOVE_FEATURE,
        payload: feature
    };
};




