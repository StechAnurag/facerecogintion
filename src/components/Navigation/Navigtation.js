import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className="f3 link dim white underline pa3 pointer" onClick={e => onRouteChange('signout')}>
          Sign Out
        </p>
      </nav>
    );
  }
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p className="f3 link dim white underline pa3 pointer" onClick={e => onRouteChange('signin')}>
        Sign In
      </p>
      <p className="f3 link dim white underline pa3 pointer" onClick={e => onRouteChange('register')}>
        Register
      </p>
    </nav>
  );
};

export default Navigation;
