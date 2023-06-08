import React from 'react';
import { useSelector } from 'react-redux';

const RequireLogin = (props) => {
 const isUserLogged = useSelector(rootReducer => rootReducer.sessionReducer.isLogged);

  const Component = props.Component;

  return (
    <>
      {isUserLogged  ? <Component /> : null}
    </>
  );
};

export default RequireLogin;





