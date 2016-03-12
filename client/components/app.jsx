import React from "react";
import NoteEditor from "./NotesEditor.jsx";
import NotesGrid from "./NotesGrid.jsx";

const App = React.createClass({
	handleNoteApp(data) {
		console.log(data);
	},
	render() {
		return (
			<div className="App">
				<h2 className="App__header">NotesApp</h2>
				<NoteEditor onNoteAdd = {this.handleNoteApp} />
				<NotesGrid/>
				// notes = {this.state.notes} onNoteDelete={this.handleNoteDelete} 
			</div>
		)
	}
});

export default App;