import './App.css';
import {useState} from "react";

function App() {
  let obj = {
    "books": 13,
    "pens":10,
    "notebooks": 44,
    "inkpens":78
  }
  const [books,setBooks] = useState(obj.books);
  const [pens,setPens] = useState(obj.pens);
  const [notebooks,setNotebooks] = useState(obj.notebooks);
  const [inkpens,setInkpens] = useState(obj.inkpens);
  // let arr = [{name: books, count: 13},{name:pens, count:10}, {name:notebooks, count:44}, {name:inkpens, count: 78}]

  
  
  return (
    <div className="App">
      <header>
        <h1>Inventory Management</h1>
      </header>
      <main>
      <div className='items'>
        <span>Books:</span>
        <button className='addBook' onClick={()=>{
          setBooks(books+1);
        }}>+</button>
        <button className='remBook' onClick={()=>{
          if(books>0){
            setBooks(books-1)
          }
          
        }}>-</button>
        <span className='totalBooks'>{books}</span>        
      </div>


      <div className='items'>
        <span>Pens:</span>
        <button className='addPen' onClick={()=>{
          setPens(pens+1);
        }}>+</button>
        <button className='remPen' onClick={()=>{
          if(pens>0){
            setPens(pens-1)
          }
          
        }}>-</button>
        <span className='totalPens'>{pens}</span>        
      </div>
      
      <div className='items'>
        <span>Notebooks:</span>
        <button className='addNotebook' onClick={()=>{
          setNotebooks(notebooks+1);
        }}>+</button>
        <button className='remNotebook' onClick={()=>{
          if(notebooks>0){
            setNotebooks(notebooks-1)
          }
          
        }}>-</button>
        <span className='totalNotebooks'>{notebooks}</span>        
      </div>


      <div className='items'>
        <span>Inkpens:</span>
        <button className='addInkpen' onClick={()=>{
          setInkpens(inkpens+1);
        }}>+</button>
        <button className='remInkpen' onClick={()=>{
          if(inkpens>0){
            setInkpens(inkpens-1)
          }
          
        }}>-</button>
        <span className='totalBooks'>{inkpens}</span>        
      </div>

    </main>
    <div className='total'>{books+pens+notebooks+inkpens}</div>
      
    </div>
  );
}


function Inventory(itemobj,itemname,classname1,classname2){
  const [item,setItem] = useState(itemobj)
  return (
    <div className='items'>
        <span>{itemname}:</span>
        <button className={classname1} onClick={()=>{
          setItem(item+1);
        }}>+</button>
        <button className={classname2} onClick={()=>{
          if(item>0){
            setItem(item-1)
          }
          
        }}>-</button>
        <span className='totalBooks'>{item}</span>
    </div>
  )
}
export default App;
