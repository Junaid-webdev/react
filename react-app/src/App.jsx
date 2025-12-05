import React, { useState } from "react";
import Form from "./form";
import "./App.css";


function App() {
  const [cardstyle,setCardstyle]=useState({
   border: "1px solid #cccccc3b",
              width: "200px",
              boxShadow: "1px 2px 3px 0px #cccccc3b",
              margin: "0px",
});

const updateTheme = (bgColor,textColor)=>{
setCardstyle({...cardstyle,backgroundColor:bgColor})
setTextColor(textColor)
}

const [textColor,setTextColor]=useState('black');
const [grid,setGrid]=useState(true)
  return (
    <>
      <div>
        <p>React in inline css style</p>
        <h3 style={{ color: "red" }}>Student Info </h3>
        <button onClick={()=>updateTheme('red','white')}>Gray Theme</button>
        <button onClick={()=>updateTheme('yellow','white')}>Defalut Theme </button>
        <button onClick={()=>setGrid(!grid)}>Toggle Grid </button>
        <div style={{ display: grid?'flex':'block', gap:"20px", flexWrap: "wrap" }}>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={ cardstyle}>
            <img
              style={{ width: "200px" }}
              src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png"
              alt=""
            />
            <h4 style={{ color:textColor }}>Sameer</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
