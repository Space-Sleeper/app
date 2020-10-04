import React from "react";
import { TextField, RadioGroup, Radio } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import Styles from './Account.module.css'

export default function AccountPage() {

  const gender = localStorage.getItem('gender');
  const age = localStorage.getItem('age');
  const height = localStorage.getItem('height');
  const weight = localStorage.getItem('weight');

  const setGender = (event) =>{
    localStorage.setItem('gender', event.value);
  }

  const setAge = (event) =>{
    localStorage.setItem('age', event.value);
  }

  const setHeight = (event) =>{
    localStorage.setItem('height', event.value);
  }

  const setWeight = (event) =>{
    localStorage.setItem('weight', event.value);
  }

  const warningNegativeNum = [
    (v) => v > 0 || 'Cant be negative number',
  ];

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Body <br></br>Information</h1>
      <h2 className={Styles.h2}>Gender</h2>
      <RadioGroup value={gender} color='#596DE4' className={Styles.input} onChange={setGender}>
        <Radio value='1' label='Female' />
        <Radio value='2' label='Male' />
        <Radio value='3' label='Other'/>
      </RadioGroup>
      <h2 className={Styles.h2}>Age</h2>
      <TextField
        className={Styles.input}
        type='number'
        rules={warningNegativeNum}
        onChange={setAge}
        value={age}
      ></TextField>
      <h2 className={Styles.h2}>Height</h2>
      <TextField
        append='cm'
        className={Styles.input}
        type='number'
        rules={warningNegativeNum}
        onChange={setHeight}
        value={height}
      ></TextField>
      <h2 className={Styles.h2}>Weight</h2>
      <TextField
        append='kg'
        className={Styles.input}
        type='number'
        rules={warningNegativeNum}
        onChange={setWeight}
        value={weight}
      ></TextField>
    </div>
  );
}
