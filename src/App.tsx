import { useState } from "react";
import "./App.css";

function App() {
  const [box1, setBox1] = useState(0);
  const [box2, setBox2] = useState(0);
  const [box3, setBox3] = useState(0);
  const [box4, setBox4] = useState(0);
  const [box5, setBox5] = useState(0);
  const [box6, setBox6] = useState(0);
  const [box7, setBox7] = useState(0);
  const [box8, setBox8] = useState(0);
  const [box9, setBox9] = useState(0);
  const [box10, setBox10] = useState(0);


  const [result, setResult] = useState<null|number>(null);
  const handleSum = () => {
    setResult(box1+box2+box3+box4+box5+box6+box7+box8+box9+box10)
  };

  return (
    <div className="app">
      <div className="boxs">
        <div className="box">
          <input type="text" className={box1!=0 ?  "filledboxInput":"boxInput"  } value={box1==0?"":box1} onChange={(e)=>setBox1(+e.target.value)}  />
        </div>
        <div className="box">
          <input type="text" className={box2!=0 ?  "filledboxInput":"boxInput"  } value={box2==0?"":box2} onChange={(e)=>setBox2(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box3!=0 ?  "filledboxInput":"boxInput"  } value={box3==0?"":box3} onChange={(e)=>setBox3(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box4!=0 ?  "filledboxInput":"boxInput"  } value={box4==0?"":box4} onChange={(e)=>setBox4(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box5!=0 ?  "filledboxInput":"boxInput"  } value={box5==0?"":box5} onChange={(e)=>setBox5(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box6!=0 ?  "filledboxInput":"boxInput"  } value={box6==0?"":box6} onChange={(e)=>setBox6(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box7!=0 ?  "filledboxInput":"boxInput"  } value={box7==0?"":box7} onChange={(e)=>setBox7(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box8!=0 ?  "filledboxInput":"boxInput"  } value={box8==0?"":box8} onChange={(e)=>setBox8(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box9!=0 ?  "filledboxInput":"boxInput"  } value={box9==0?"":box9} onChange={(e)=>setBox9(+e.target.value)} />
        </div>
        <div className="box">
          <input type="text" className={box10!=0 ?  "filledboxInput":"boxInput"  } value={box10==0?"":box10} onChange={(e)=>setBox10(+e.target.value)} />
        </div>
      </div>

      <div className="footer">
        <div className="sum" onClick={handleSum}>
          SUM
        </div>
        <div className="result">{result == null ? "result" : result}</div>
      </div>
    </div>
  );
}

export default App;
