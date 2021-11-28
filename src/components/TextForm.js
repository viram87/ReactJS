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
                       
        const [Text, setText] = useState('enter text here');
        return (
        <div>
        <div className="container">
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={Text} onChange={handleonchange} id="myBox" rows="3"></textarea>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to uppercase</button>
            <button className="btn btn-primart" onClick={handleLoclick}>Convert to lower case</button>
        </div>
        </div>
        </div>
        )    
        }