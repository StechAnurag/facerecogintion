import React from 'react';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p className="f3 link dim white underline pa3 pointer" onClick={e => onRouteChange('signin')}>
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
