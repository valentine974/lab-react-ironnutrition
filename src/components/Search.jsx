import {  Input } from 'antd';
 
function Search(props) {
  return (  
    

    <div >
    <h1>Search</h1>
      <form >  
      <Input type="text" onChange={(e)=>props.search(e.target.value)}/> 
      </form>

    </div>

  );
}

export default Search;