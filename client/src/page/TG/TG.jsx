import Heading from "../../component/heading/Heading";
import Form from "../../component/form/Form";
import '../DocSimp/docsimp.scss';
import React, { useState } from 'react';

//------------------------------------------------------
//step4: create form component in jsx file linked in App.js

import axios from 'axios';
//import React,{ Component} from "react";


// function TG() {

//     const [inputValues, setInputValues] = useState({
//         inputValue1: '',
//         inputValue2: '',
//         inputValue3: '',
//     });

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
        
//         setInputValues(prevValue => {
//             return {
//                 ...prevValue,
//                 [id]: value,
//             };
//         });

//         console.log(inputValues);
//     };

//     const handleClick = (e) => {
//         e.preventDefault();



//     };





//     return (
//         <div className='DocSimp'>
//             {/* <p className="App-intro">;;;;;;{this.state.apiResponse}</p> */}
//             <Heading title={"Contract:Generate Template"} description={"Analyse order/contract between Petitioner and Respondent giving 5 most critical clauses,their potential risks and suggestive revisions"} />
//             <Form inp1={{ id: 'inputValue1', label: 'Legal Document Type', value: inputValues.inputValue1, onChange: handleInputChange }} 
//             inp2={{ id: 'inputValue2', label: 'Company Name', value: inputValues.inputValue2, onChange: handleInputChange }} 
//             inp3={{ id: 'inputValue3', label: 'Any specific Requirements', value: inputValues.inputValue3, onChange: handleInputChange }}
//              onSubmit={handleClick} ></Form>
//         </div>
//     );
// }


class TG extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputValue1: '',
                        inputValue2: '',
                        inputValue3: '' ,
                       };
      }

    handleInputChange = (e) => {
        const { id, value } = e.target;
        
        this.setState(prevValue => {
            return {
                ...prevValue,
                [id]: value,
            };
        });
        //this.setState({[e.target.inputValue1]: e.target.value});
        console.log(this.state);
       // console.log(".");
    };

    // handleChange = (event) => {
    //     this.setState({[event.target.inputValue1]: event.target.value});
    // }


    //-------------------------------------------------------------------------------------
    //step5: handle submit event is added with async 

    handleSubmit = async(event) => {
        event.preventDefault();
        console.log("submit");
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        console.log(JSON.parse(JSON.stringify(this.state))) ;


        alert('A form was submitted: ' + this.state.inputValue1);

        //------------------------------------------------------------------------------
        //step6: backend connected via fetch api 
        //here routes folder in api is handling routes request to a particular js file
     
        const res = await fetch("http://localhost:9000/TG_output", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            // We convert the React state to JSON and send it as the POST body
            body:JSON.stringify(this.state)
          })//.then(function(response) {
          //   console.log("Results here");
          //   console.log(response);
          //   return response.json();
          // })
        //   .then(res => res.text())
        //   .then(res => this.setState({ apiResponse: res }));

        //------------------------------------------------------------------------------------------------
        //step7: reading response and giving output

        const data = await res.json();
        console.log(data);
       // console.log(data.description.content+"2");
        console.log(data.description+"3");
        const description =document.querySelector(".Response-document");

        description.textContent=data.description;

     
       
    }



 render(){
    return (
        <div className='DocSimp'>
            <p className="Response-document" style={{whiteSpace: "pre-wrap"}}> ;;;</p>
            <Heading title={"Contract:Generate Template"} description={"Analyse order/contract between Petitioner and Respondent giving 5 most critical clauses,their potential risks and suggestive revisions"} />
            <Form inp1={{ id: 'inputValue1', label: 'Legal Document Type', value: this.state.inputValue1, onChange: this.handleInputChange }} 
            inp2={{ id: 'inputValue2', label: 'Company Name', value: this.state.inputValue2, onChange: this.handleInputChange }} 
            inp3={{ id: 'inputValue3', label: 'Any specific Requirements', value: this.state.inputValue3, onChange: this.handleInputChange }}
             handleSubmit={this.handleSubmit} ></Form>
        </div>
    );
 }
}

export default TG