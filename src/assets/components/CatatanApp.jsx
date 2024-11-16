import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import SearchBar from './SearchBar';
import { getInitialData } from '../utils/data';

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatans: getInitialData(),
      searchQuery: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const catatans = this.state.catatans.filter(catatan => catatan.id !== id);
    this.setState({ catatans });
  }

  onAddCatatanHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        catatans: [
          ...prevState.catatans,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const catatans = this.state.catatans.map((catatan) => {
      if (catatan.id === id) {
        return { ...catatan, archived: !catatan.archived };
      }
      return catatan;
    });
    this.setState({ catatans });
  }

  onSearchHandler(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    const { catatans, searchQuery } = this.state;

    const filteredCatatans = catatans.filter(catatan =>
      catatan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      catatan.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const activeCatatans = filteredCatatans.filter(catatan => !catatan.archived);
    const archivedCatatans = filteredCatatans.filter(catatan => catatan.archived);
    return (
      <div className="catatan-app-container">
        <h1>Buat Catatan</h1>
        <SearchBar onSearch={this.onSearchHandler} />
        <NoteInput addCatatan={this.onAddCatatanHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList catatans={activeCatatans} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h2>Arsip</h2>
        <NoteList catatans={archivedCatatans} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    );
  }
}

export default CatatanApp;
