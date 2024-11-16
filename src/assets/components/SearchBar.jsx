import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
    this.props.onSearch(searchQuery);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.searchQuery}
          onChange={this.onSearchChange}
          className="search-bar__input"
        />
      </div>
    );
  }
}

export default SearchBar;
