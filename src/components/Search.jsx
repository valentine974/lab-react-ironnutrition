import {  Input } from 'antd';

// Iteration 2
function Search(props) {
  return (  
    

    <div >
    <h1>Search</h1>
      <form >  
      <Input type="text" onChange={(e)=>props.search(e.target.value)}/>
      {/* <Input type="text" onChange={(e)=>console.log(e.target.value)}/> */}
      </form>

    </div>

  );
}

export default Search;