import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  return (
    <CSSTransition
      in={alert.visible}
      mountOnEnter
      unmountOnExit
      timeout={{
        enter: 500,
        exit: 300,
      }}
      classNames={"alert"}
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong className="mr-2">Atention!!!</strong>
        {alert.text}
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={hide}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};
