import React from 'react';
import { showFormattedDate } from '../utils/data';

export default function NoteItems({ title, body, onDelete,onArchive, id,createdAt }) {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
      <button className="note-item__delete" onClick={() => onDelete(id)}>Hapus</button>
      <button className="note-item__archive" onClick={() => onArchive(id)}>Arsipkan</button>
    </div>
  );
}
