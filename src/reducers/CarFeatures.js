import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
    additionalPrice: 0,
    car: 
      {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
    }


export const featureReducer = (state = initialState, action) => {
  console.log("Action: ", action);
  switch(action.type){
    case ADD_FEATURE:
      console.log("Action.payload: ", action.payload)
      console.log("state.car.feature added: ", state.car.features.name);
      console.log("TEST: ADD FEATURE FIRED");
      return  {
        ...state, 
        car:{...state.car, features: [...state.car.features, action.payload]},
        store:state.store.filter(({id}) => id !== action.payload.id),
        additionalPrice: state.additionalPrice + action.payload.price 
      };
    case REMOVE_FEATURE:
      console.log("state.car.feature removed: ", state.car.features);
      console.log("ACTION PAYLOAD REMOVE: ", action.payload)
      return{
        ...state, 
        car:{...state.car, features: state.car.features.filter(({id}) => id !== action.payload.id)},
        store: state.store, store: [...state.store, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price 
      };
    default:
      return state;
    }

}