import React from 'react';
import '../App.css';
// import {getSigns} from '../api/apiAztro';


export const SelectSign = ({onSignSelected}) => {
    // const [signs, setSigns] = useState([]);

    // useEffect(()=>{
    //     getSigns().then(setSigns);
    // }, []);

    return(
    <>
    <div className="SelectSign">
    <h2>Please Select Your Sign...</h2>
    <div className="grid">
      {['aries', 'taurus', 'gemini', 'cancer', 'leo','virgo', 'libra', 'scorpio', 'sagitarius', 'capricorn', 'aquarius', 'pisces'].map((sign, i)=>{
      
    return(
    <button className={sign} key={sign} onClick={() => onSignSelected(sign)}>
      {sign}
      <p>heloo</p>
      </button>
      )
         
      })}
      </div>
      </div>
    </>
 )}