import React, { useState } from "react";

export const ModalContext = React.createContext({
  visible: false,
  setVisibility: () => {},
  title: null,
  setTitle: () => {},
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitleState] = useState(null);

  const setVisibility = () => {
    setVisible(!visible);
  };

  const setTitle = (value) => {
    setTitleState(value);
  };
  return (
    <ModalContext.Provider
      value={{ visible: visible, setVisibility: setVisibility, title: title, setTitle: setTitle }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
