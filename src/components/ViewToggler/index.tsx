import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './index.scss';

function ViewToggler() {
  // Context
  const { state, dispatch } = useContext(GlobalContext);

  // Action Creator
  const handleViewChange = (updatedView: string) => {
    if (updatedView !== state.view) {
      dispatch({ type: 'SET_VIEW', payload: updatedView });
    }
  };

  return (
    <div className="View-Toggler-Wrapper">
      <button
        className={`View-Toggler-Button ${state.view === 'current' && 'View-Toggler-Button-Selected'}`}
        onClick={() => {
          handleViewChange('current');
        }}>
        CURRENT
      </button>
      <button
        className={`View-Toggler-Button ${state.view === 'forecast' && 'View-Toggler-Button-Selected'}`}
        onClick={() => {
          handleViewChange('forecast');
        }}>
        FORECAST
      </button>
    </div>
  );
}

export default ViewToggler;
