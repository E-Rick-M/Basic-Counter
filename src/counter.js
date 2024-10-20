import {Fragment, useState,useRef,useEffect} from 'react'
import classes from './counter.module.css'
function Counter(){
    const [count,setCount]=useState(0);
    const [isIncreamenting,setIsIncreamenting]=useState(false)
    const [isDecreamenting,setIsDecreamenting]=useState(false)
    const enteredNumber=useRef()
    
    function resetCount(){
        setCount(0)
        setIsIncreamenting(false)
        setIsDecreamenting(false)
    }

    function startIncreament(){
        setIsIncreamenting(true)
        setIsDecreamenting(false)
    }
    function startDecreament(){
        setIsIncreamenting(false)
        setIsDecreamenting(true)
    }

    function stopEffect(){
        if(isIncreamenting){
            setIsIncreamenting(false)
        }else if(isDecreamenting){
            setIsDecreamenting(false)
        }
    }
    useEffect(()=>{
        let interval
        if(isIncreamenting){
           interval=setInterval(()=>{
                setCount((prevCount)=>prevCount+1)
           },1000)

     
        }else if(isDecreamenting){
            interval=setInterval(()=>{
                setCount((prevCount)=>prevCount-1)
           },1000)
        }
        return ()=>clearInterval(interval)
    },[isIncreamenting,isDecreamenting])
    return(
        <Fragment>
            <div className={classes.container}>
            <input type='number'ref={enteredNumber} value={count} disabled='true'/>
            <button onClick={resetCount}>Reset</button>
            <button onClick={startIncreament}>Increament</button>  
            <button onClick={startDecreament}>Decrement</button>  

            <button onClick={stopEffect}>Stop</button>  
            
            </div>
            
        </Fragment>
    )
}
export default Counter