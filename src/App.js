import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// Reducers
// import { featureReducer, initialState } from './reducers/CarFeatures';
// Actions 
import {RemoveExistingFeature, AddNewFeature} from './actions/index';

const App = props => {
  //  const [newCar, setNewCar] = useState({});
  //  const [deleteFeature, setDeleteFeature] = useState(false);

  const removeFeature = feature => {
    // dispatch an action here to remove an item
  };

  const addFeature = feature => {
    // dipsatch an action here to add an item
    // console.log("addFeature: ", item);
    AddNewFeature(feature);
  };

  console.log( "app props: ", props.car)


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car}  removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice:state.additionalPrice,
    store: state.store
  };
};


export default connect(mapStateToProps, {AddNewFeature, RemoveExistingFeature})(App);
