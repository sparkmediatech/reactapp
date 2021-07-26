import React,{useState, useEffect} from 'react'


const Singlecolor = ({rgb, weight, index, hex}) => {
    const [alert, setAlert] = useState(false);
    const background = rgb.join(',');
    const [showcopybtn, setShowCopyBtn] = useState(false)
    const hexValue = `#${hex}`

    const handleAlert = () =>{
        setShowCopyBtn(true)
    };

    const handleLeave = () =>{
        setShowCopyBtn(false)
        setAlert(false)
    };

    const handleClick = () =>{
        navigator.clipboard.writeText(hexValue);
        setAlert(true)
    }
     
    /*useEffect(() => {
      const timer = setTimeout(() => {
          setShowCopyBtn(false)
      }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [showcopybtn])*/


    
    return (
        <div className={`singlecolorContainer ${index >= 10 && 'textColor'}`}style={{backgroundColor
        :`rgb(${background})`}} onMouseEnter={handleAlert} onMouseLeave={handleLeave} >
            
            <p className='paraClass'>{weight}%</p>
            <p className='htmlValue'>{hexValue}</p>
           {alert && <p className='copiedText'>Text copied to clipboard</p>}

           <button className={`${showcopybtn? 'copyBTN': 'copyBTN2'} `} onClick={handleClick}>Copy Text</button>
        </div>
    )
}

export default Singlecolor;