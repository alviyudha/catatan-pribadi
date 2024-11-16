import React from 'react';
import NoteItems from './NoteItems';

export default function NoteList({ catatans, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {catatans.length === 0 ? (
        <p>Tidak ada catatan.</p>
      ) : (
        catatans.map((catatan) => (
          <NoteItems 
            key={catatan.id}
            id={catatan.id}
            title={catatan.title}
            body={catatan.body}
            archived={catatan.archived}
            createdAt={catatan.createdAt}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      )}
    </div>
  );
}
