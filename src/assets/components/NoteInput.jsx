import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxTitleLength = 20;
        if (event.target.value.length <= maxTitleLength) {
            this.setState(() => {
                return {
                    title: event.target.value,
                };
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addCatatan(this.state);
        this.setState(() => ({
            title: '',
            body: '',
        }));
    }

    render() {
        const titleCharacterCount = this.state.title.length;

        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p className="title-counter">
                    {titleCharacterCount}/20 characters
                </p>
                <input
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    className="note-input__title"
                />
                <textarea
                    placeholder="Body"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    className="note-input__body"
                />
                <button type="submit" className="note-input__button">
                    Submit
                </button>
            </form>
        );
    }
}

export default NoteInput;
