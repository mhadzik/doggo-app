import React, { useState } from "react";

export const ModalContext = React.createContext({
  visible: false,
  setVisibility: () => {},
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [visible, setVisible] = useState(false);

  const setVisibility = () => {
    setVisible(!visible);
  };
  return (
    <ModalContext.Provider
      value={{ visible: visible, setVisibility: setVisibility }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
