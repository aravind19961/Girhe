import logo from './logo.svg';
import './App.css';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import {Row,Col,Container} from "react-bootstrap";


import {Collapse} from 'react-collapse';


import  {useState} from 'react';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function App() {
// Practise
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const [value, setValue] = React.useState('female');

    const handleChange1 = (event) => {
        setValue(event.target.value);
    };

    const [show,setShow]=useState(true);



    const  hiding=()=>{
        setShow(!show);
    };

  return (
    <div className="App">
      <h1> Add Rates</h1>
        <div>
            <h3>Choose an Xslx file </h3>
            <p>implement The file drag and drop box here</p>
        </div>

        <div>
            <button onClick={hiding}>Next Steps</button>
            <i></i>
        </div>

        <Collapse isOpened={show}>
            <Container>

                <Row>
                    <Col xs='3'>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                        >UPS</Select>
                    </Col>
                    <Col>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                        >UPS</Select>
                    </Col>
                    <Col>
                        `x`x
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange1}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>

                    </Col>
                    <Col>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange1}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />

                        </RadioGroup>

                    </Col>
                </Row>
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <TextField*/}
                {/*            id="date"*/}
                {/*            label="Birthday"*/}
                {/*            type="date"*/}
                {/*            defaultValue="2017-05-24"*/}
                {/*            className={classes.textField}*/}
                {/*            InputLabelProps={{*/}
                {/*                shrink: true,*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <TextField*/}
                {/*            id="date"*/}
                {/*            label="Birthday"*/}
                {/*            type="date"*/}
                {/*            defaultValue="2017-05-24"*/}
                {/*            className={classes.textField}*/}
                {/*            InputLabelProps={{*/}
                {/*                shrink: true,*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <FormLabel component="legend">Gender</FormLabel>*/}
                {/*        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange1}>*/}
                {/*            <FormControlLabel value="female" control={<Radio />} label="Female" />*/}
                {/*            <FormControlLabel value="male" control={<Radio />} label="Male" />*/}
                {/*            <FormControlLabel value="other" control={<Radio />} label="Other" />*/}
                {/*        </RadioGroup>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

            </Container>

        </Collapse>

    </div>
  );
}

export default App;
