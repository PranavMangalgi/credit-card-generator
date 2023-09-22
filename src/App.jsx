import { useState } from 'react'
import './App.css'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [name, setName] = useState('');
  const [cardNum, setcardNum] = useState('');
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name.length===0||cardNum.length===0||cvc.length===0){
      setError(true);
    }
  }
  
  const cardNumberInput = (e) =>{
    let inputValue = e.target.value.replace(/\s/g, ''); 
    let formattedValue = '';
    for (let i = 0; i < inputValue.length; i++) {
      formattedValue += inputValue[i];
      if ((i + 1) % 4 === 0 && i !== inputValue.length - 1) {
        formattedValue += ' ';
      }
    }
    e.target.value = formattedValue;
    setcardNum(formattedValue);
  }
  return(
    <>
      <div className='rectangle'>
        <div className='show-details'>
          <div className='ellipses'>
            <div className='ellipse1'></div>
            <div className='ellipse2'></div>
          </div>
          <div className='card-info'>
            <div className='card-number'>{cardNum.length===0?'0000 0000 0000 0000':cardNum}</div>
            <div className='last-div'>
              <div>{name.length===0?'Jane Appleseed':name}</div>
              <div>{month}/{year}</div>
            </div>
          </div>
        </div>
        <div className='show-cvc'>
          <div>{cvc.length===0?'000':cvc}</div>
        </div>
      </div>
      <div className='form-container'>
          <form >
            <div className='name-container all'>
              <label htmlFor="name">cardholder name</label>
              <input type="text" placeholder='e.g. Jane Appleseed' id='name' onChange={(e)=>setName(e.target.value)} maxLength="19"/>
              {error && name.trim().length === 0 && (
              <label className='error'>Cardholder name required</label>
            )}
            </div>
            
            <div className='c-numer-container all'>
              <label htmlFor="c-number">card number</label>
              <input type="text" id='c-number' placeholder='e.g. 1234 5678 9123 0000' onChange={cardNumberInput}/>
              {error&&cardNum.length===0?<label htmlFor="" className='error'>Card number required</label>:cardNum.length>19?<label htmlFor="" className='error'>Card number should be 16 digits</label>:''}
            </div>

            <div className='cvc-date'>
            <div className='date-container all'>
              <label htmlFor="">exp. date( mm/ yy)</label>
              <div className='inside-date'>
              <input type="number" placeholder='MM' onChange={(e)=>setMonth(e.target.value)}/>
              <input type="number" placeholder='YY' onChange={(e)=>setYear(e.target.value)}/>
              </div>
            </div>
            <div className='cvc all'>
              <label htmlFor="">CVC</label>
              <input type="number" placeholder='e.g. 123' onChange={(e)=>setCvc(e.target.value)}/>
              
              {error && (cvc.length===0 ||cvc.length>3) && <label htmlFor="" className="error">CVC required of 3 digits</label>}
             
            </div>
            </div>
            
            <button onClick={handleSubmit}>Confirm</button>
          </form>
      </div>
    </>
  )
}

export default App
