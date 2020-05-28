import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FireBaseContext } from "../context/fireBase/fireBaseContext";
import Loader from "../components/Loader";

export const Home = () => {
  const { loading, notes, getNotes, removeNote } = useContext(FireBaseContext);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} removeNote={removeNote} />}
    </Fragment>
  );
};
