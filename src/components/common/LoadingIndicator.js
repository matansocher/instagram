import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <CircularProgress size={80} thickness={5} />
    </div>
  )
}

export default LoadingIndicator;