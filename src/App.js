import './App.css';
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from "react-redux";
import { add } from "./redux/actions";

function App(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [chipData, setChipData] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' }
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleSubmit = (e) => {
    props.add({ name, email, address, friends: chipData })
  }

  return (
    <div className="App">
      <form noValidate autoComplete="off">
        <TextField type="text" name="name" onChange={(e) => setName(e.target.value)} /><br />
        <TextField type="email" name="email" onChange={(e) => setEmail(e.target.value)} /><br />
        <TextField type="textarea" name="address" onChange={(e) => setAddress(e.target.value)} /><br />
        {chipData.map((data) =>
          <Chip
            key={data.label}
            label={data.label}
            onDelete={handleDelete(data)}
          />
        )}<br />
        <Button onClick={e => handleSubmit(e)}>
          Save
          </Button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { add })(App);
