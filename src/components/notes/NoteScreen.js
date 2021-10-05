import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const url =
    "https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg";

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
        ></textarea>

        {url && (
          <div className="notes__image">
            <img src={url} alt="imagen" />
          </div>
        )}
      </div>

      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default NoteScreen;
