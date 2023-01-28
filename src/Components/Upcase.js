import React from 'react'
import { useState } from 'react';

export default function Upcase(props) {
    const HandleUpClick=()=>{
        // console.log("button clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Uppercase","success");

    }
    const HandleLoClick=()=>{
        // console.log("button clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lowercase","success");

    }
    const HandleExtraSpace=()=>{
        // console.log("button clicked");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces are being Removed","success");

    }
    const handleCopy=()=>{

        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        //copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied to Clipboard","success");
    }
    const alternateClick=()=>{
        // console.log("button clicked");
        let newText='';
        for (let i = 0; i < text.length; i++) {
            if(i%2===0){
            newText=newText+text[i].toUpperCase()}
            else{
                newText=newText+text[i].toLowerCase()
            }
        } 
        setText(newText);
        props.showAlert("Text Changed","success");

    }
    const clearClick=()=>{
        // console.log("button clicked");
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared","success");

    }   
    const handleOnChange=(event)=>{
        console.log("text clicked");
        setText(event.target.value);

    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        props.showAlert("Text File Downloaded","success");
      }
       
    
    const [text, setText] = useState('');
    return (
       <div className="container-sm" style={{color: props.mode==='dark'?'white':'#121212'}}>
       <div>
            <h1>Please Enter Values Here</h1>
            <div className="mb-3" >
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#121212':'white',color: props.mode==='dark'?'white':'#121212'}} value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-outline-dark btn-xs mx-2" onClick={HandleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-outline-primary btn-xs mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-outline-danger btn-xs mx-2" onClick={clearClick}>Clear</button>
            <button type="button" className="btn btn-outline-success btn-xs mx-2" onClick={downloadTxtFile}>Download File</button>
            <button type="button" className="btn btn-outline-primary btn-xs mx-2" onClick={alternateClick}>AlTeRnAtEcLiCk</button>
            <button type="button" className="btn btn-outline-success btn-xs mx-2" onClick={handleCopy}>CopyTOClipBoard</button>
            <button type="button" className="btn btn-outline-primary btn-xs mx-2" onClick={HandleExtraSpace}>RemoveExtraSpaces</button>
        </div>
        <div>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').filter((text)=>text!=="").length} words and {text.length} letters</p>
            <p>It takes {0.8 * text.split(" ").length} minutes to read the text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to Preview it here'}</p>
        </div>
        </div>
    )
}
