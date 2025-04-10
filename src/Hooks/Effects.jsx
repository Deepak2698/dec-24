import React,{useState, useEffect} from 'react'; //imports useState & useEffect

function Effects() { //functional component with useEffect() Hook
   const [isOn,setIsOn] = useState(false); 
   //const [new State,setter function ] = useState(initial state); 
   /*          setIsOn: Custom method that updates the state variable, registered here
                  isOn: current value of state variable
       useState(false): inital state property value set = false for isOn
   */
   useEffect(() => {
        console.log('Successfully Subscribed')
   })
   return(
      <div>
         <h1>useEffect() Effect Hook</h1>

    {/*
    <div>
    {}{}
        subscribe
        Sucessful subscription
        {true,subscribe->TRUE}
        {succesfully subscribed}
        When We Unsuscrribe
        {false, succesfully subscribed -> FALSE}
    </div>
     */}
         {!isOn && (
            <button type="button" onClick={ () => setIsOn(true)}>  {/*Changes state of isOn = true  */}
               <h1>Subscribe</h1>
            </button>
         )}
         
         {isOn && (
            <button type="button" onClick={ () => setIsOn(false)}>  {/*Changes state of isOn = false  */}
               <h1>Sucessfully subscribed</h1>
            </button>
         )}
      </div>
   )
}
export default Effects;

