import React from "react";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="journal__entries">
      {notes.map((note) => (
        <JournalEntry key={note} />
      ))}
    </div>
  );
};

export default JournalEntries;
