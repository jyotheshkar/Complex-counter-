import React, { useState } from 'react';

const UseStateCounter = () => {
const [value , setValue ] = useState(0);

{ /*
 const reset = () => {
  setvalue(0)
}
  */ }
  
const reactPro =() => {
  setTimeout(() => {
      setValue( (Alpha) => {
        return Alpha + 100;
      } ) 
  }, 2000);
  
}


  return <React.Fragment>
<section style={{ margin: '4rem 0' }} >
  <h1> React counter  </h1>
<h1> {value} </h1>
<button className='btn'  onClick={() => {
  setValue(value - 1)
}} > Decrease  </button>
<button  className='btn' onClick={(reset) => {
  reset = setValue(0);
}} > Reset  </button>
<button className='btn'  onClick={() => {
  setValue( value + 1)
}}
 > Increase  </button>


</section>
<section style={{ margin: '4rem 0' }}  >

   <h1> React counter pro </h1>
   <h1> {value} </h1>
<button  className='btn'  onClick={reactPro}  > increase later </button>

</section>


  </React.Fragment>
};

export default UseStateCounter;


