import React,{useState} from 'react'; //imports useState

function States2() { //functional component
   const [numbers,setNumbers] = useState([]);
  //const [new State,setter function ] = useState(initial state); 
  /*    setNumbers: Custom method that updates the state variable, registered here
           numbers: current value of state variable = empty array
     useState([]) : initial state property , numbers array for this example set = []
  */
    const addNumber = () => {  //custom function
        setNumbers([...numbers,{     //spread operator iterates over the array like a for loop and keeps adding new Math.random() 
                                     //values to the array
            id: numbers.length,      //stores length of the array 
            value: Math.floor(Math.random() * 10) +1  //random() generates random values as decimal , so * 10. 
                                                       //Floor()  rounds off the values
        }])
   };
   return(
      <div>
          <h1>useState() Hook with array </h1>
         <h1>
            <button onClick={addNumber}>Add a number </button>   {/*On click ,adds new random number to the numbers array*/}
            <ul>
                {numbers.map((data) => {          //map function called once for each array element. id (array length) used as the array item key
                   return <li key={data.id}> {data.id} : {data.value}</li>
                })}
            </ul>
         </h1>
      </div>

   )
}
export default States2;
