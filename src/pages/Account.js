import React from "react";
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import './Account.css'

export default function AccountPage() {
  return (
    <div className={"container"}>
      <h1>Body Information</h1>
      <h2>Gender</h2>
      <h2>Age</h2>
      <TextField
        className='age'
        type='number'
      ></TextField>
      <h2>Height</h2>
      <TextField
        className='height'
        type='number'
      ></TextField>
      <h2>Weight</h2>
      <TextField
        className='weight'
        type='number'
      ></TextField>
    </div>
  );
}
