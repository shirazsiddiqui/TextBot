import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("upper case button click" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("convert to upper case" , "succcess")
    };

   

    const handleLoClick = () => {
        // console.log("upper case button click" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("convert to lower case" , "succcess")

    }

    const handleCleClick = () => {
        // console.log("upper case button click" + text)
        let newText = (" ");
        setText(newText);
    }


    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copied to clipboard" , "succcess")

    }

    // use regex in javascript
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    // Declare a new state variable, which we'll call "count" ----Hook
    const [text, setText] = useState('');
    console.log("use state" ,text);

    // setText("enter new text here ");

    return (

    <>
        <div className="container">
            <h1>{props.heading}  </h1>      
            <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCleClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




        </div>

        <div className="container my-3">
            <h1>Your Text Sumary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>preview</h2>
            <p>{text.length > 0?text:"Enter text to above the box to Preview it here"}</p>
        </div>
     </>   
    )
}
