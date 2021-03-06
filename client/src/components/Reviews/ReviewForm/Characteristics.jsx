import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacteristicDataTable from './CharacteristicDataTable.js';

const Characteristics = ({characteristics, characteristicArray, choiceObj, setChoiceObj}) => {

  const onClickHandler = (e) => {
    let value = parseInt(e.target.value);
    let key = e.target.id;
    if (choiceObj[key] !== undefined) {
      let copy = {...choiceObj}
      copy[key] = value;
      setChoiceObj(copy)
    } else {
      setChoiceObj({...choiceObj, [key]: value});
    }
  }

  useEffect(() => {
    console.log(choiceObj, 'this is the in the useEffect')
  },[choiceObj])

  if (characteristicArray.length !== 0) {
    return (
      <div>
        <p>Rate the following *</p>
        { characteristicArray.map((characteristic, index) => {
          let tabledata = CharacteristicDataTable[characteristic];
          return (
            <div key={characteristics[characteristic].id}>
              <small><b>{characteristic}</b></small>
              <form>
                <label><input name="choice" type="radio" id={characteristics[characteristic].id} value='1'onClick={onClickHandler}/><small>{tabledata[0]}</small></label>

                <label><input name="choice" type="radio" id={characteristics[characteristic].id} value='2' onClick={onClickHandler}/><small>{tabledata[1]}</small></label>

                <label><input name="choice" type="radio" id={characteristics[characteristic].id} value='3' onClick={onClickHandler}/><small>{tabledata[2]}</small></label>

                <label><input name="choice" type="radio" id={characteristics[characteristic].id} value='4' onClick={onClickHandler}/><small>{tabledata[3]}</small></label>

                <label><input name="choice" type="radio" id={characteristics[characteristic].id} value='5' onClick={onClickHandler}/><small>{tabledata[4]}</small></label>
              </form>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div>
        loading...
      </div>
    )
  }
}
export default Characteristics;