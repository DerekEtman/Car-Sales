export const REMOVE_FEATURE = "REMOVE_FEATURE";
export function RemoveExistingFeature(feature) {
    return{
        type:REMOVE_FEATURE,
        payload: feature
    }
}

export const ADD_FEATURE = "ADD_FEATURE";
export function AddNewFeature(feature) {
    return{
        type:REMOVE_FEATURE,
        payload: feature
    }
}
