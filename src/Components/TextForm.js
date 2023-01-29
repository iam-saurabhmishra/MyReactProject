import React, { useState } from 'react'

const TextForm = (props) => {

    const [text, setText] = useState("Enter your text here")
    let colorMode = (props.mode==="light")?"white":"#19345e";
    function converToUpCase() {
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Text is converted to upper case ","success");
    }

    function converToLoCase() {
        let loText = text.toLowerCase();
        setText(loText);
        props.showAlert("Text is converted to upper case ","success");
    }

    function handleOnChange(event) {
        setText(event.target.value)
    }

    function reverseGivenString() {
        let revText = text.trim().split(" ").reverse().join(" ");
        setText(revText);
    }

    function reverseEachCharacter() {

        let revText = text.trim().split(" ");
        let text1 = "";
        for (let i = 0; i < revText.length; i++) {
            text1 += revText[i].split("").reverse().join("") + " ";
        }
        setText(text1.trim());
    }

    function clearText() {
        setText("");
    }

    function copyToClipboard() {
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard ","success");
    }
    function getJoke() {
        fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
            headers: {
              'X-RapidAPI-Key': '0963d8dbabmsh9461bec69b6477ap12c38bjsnb6fe481a73bd',
              'X-RapidAPI-Host' : 'dad-jokes.p.rapidapi.com',
            },
          })
          .then(response => response.json())
          .then((response)=>{
            setText((response.body[0].setup)+ " " +(response.body[0].punchline));
          })
          .catch(error => console.log('Error while fetching:', error))
    }


    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className='text-warning-emphasis'>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" value={text} onChange={handleOnChange} style={{backgroundColor:colorMode,color:(props.mode==="light")?"black":"white"}}></textarea>
                    <button className="btn btn-primary my-3" onClick={converToUpCase}>Convert to UpperCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={converToLoCase}>Convert to LowerCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={reverseEachCharacter}>Reverse Each Charcter</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={reverseGivenString}>Reverse Given String</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={copyToClipboard}>Copy to Clipboard</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={getJoke}>Get Joke of day</button>
                </div>
            </div>

            <div className="container">
                <h2 className='text-warning-emphasis'>Text Summary</h2>
                <p style={{color:"green"}}>{text.split(/\s+/).filter((e)=>e.length>0).length} words , {text.length} characters</p>
                <p style={{color:"green"}}>{.008 * text.split(/\s+/).filter((e)=>e.length>0).length} will be the average read time</p>
            </div>
        </>

    )
}

export default TextForm