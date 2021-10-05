import React from "react";

const JournalEntry = () => {
  const url =
    "https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg";

  return (
    <div className="journal__entry pointer animate__animated animate__fadeIn animate__faster">
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">Hola</p>
        <p className="journal__entry-content">Body</p>
      </div>

      <div className="journal__entry-date-box">
        <span> Date </span>
        <h4> Do </h4>
      </div>
    </div>
  );
};

export default JournalEntry;
