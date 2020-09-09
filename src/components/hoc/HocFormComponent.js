import React from 'react';

const HocFormComponent = (Component) => {
  const WrapperContainer = (props) => <Component {...props} />;

  return WrapperContainer;
};

export default HocFormComponent;
