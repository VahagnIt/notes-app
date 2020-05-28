import React, { useReducer } from "react";
import axios from "axios";
import { FireBaseContext } from "./fireBaseContext";
import { fireBaseReducer } from "./firBaseReducer";
import { SHOW_LOADING, ADD_NOTE, GET_NOTES, REMOVE_NOTE } from "../types";

const url = process.env.REACT_APP_DB_URL;

export const FireBaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(fireBaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADING });
  const getNotes = async () => {
    showLoader();
    try {
      const res = await axios.get(`${url}/notes.json`);
      const payload = Object.keys(res.data).map((id) => {
        return {
          id,
          ...res.data[id],
        };
      });
      dispatch({
        type: GET_NOTES,
        payload,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };
    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: res.data.name,
      };
      dispatch({
        type: ADD_NOTE,
        payload,
      });
      console.log(payload, state);
    } catch (err) {}
  };
  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };
  //   console.log("state", state);
  return (
    <FireBaseContext.Provider
      value={{
        showLoader,
        getNotes,
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};
