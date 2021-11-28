import React , {useState} from 'react'


export default function TextForm(props) {


    const handleUpclick = ()=> {
        console.log("uppercase was clicked");
        let newText = Text.toUpperCase();
        setText(newText);
       

        
    }

    const handleLoclick = ()=> {
        let text = Text.toLowerCase();
        setText(text);
    }

    const handleonchange = (event)=> {
        console.log("on change");
        setText(event.target.value);
               
    }

    const handleClear = ()=> {
        let clear = "";
        setText(clear);

    }
                       
        const [Text, setText] = useState('');
        return (
        <div>
        <div className="container">
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" placeholder = "enter text here" value={Text} onChange={handleonchange} id="myBox" rows="3"></textarea>
            <br />
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to uppercase</button>
           
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lower case</button>

            <button className="btn btn-primary" onClick={handleClear}>Clear</button>
        </div>
        </div>

        <div className="container">
            
             <h2>Text summary</h2>   

            <p>
                length of characters is {Text.length} and length of words is {Text.split(" ").length}
            </p>
            <p>
            {0.008*Text.split(" ").length} Minutes to read
            </p>

            <h2>Preview</h2>
            <p>{Text}</p>

        </div>
        </div>


        
        )    
        }   