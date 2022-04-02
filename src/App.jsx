import { useState, useEffect } from 'react'
import './sass/index.scss'
import { InputItem } from './components/InputItem'
import { List } from './components/List'
import { MenuBar } from './components/MenuBar'



function App() {
  const [list, setList] = useState([])
  const [showInput, setShowInput] = useState(false);
  const [ init , setInit] = useState(false);

  useEffect(() => {
    if(!init){
      appendEvent();
      setInit( true )
    }
  }, []);

  const appendEvent = () => {
    console.log( 'append keydown' );
    document.body.addEventListener('keydown', function(e){
      // console.log( e.code );
      if( e.code == 'Escape' ){
        setShowInput( false );
      }
    })
  }

  const handleClick = (e) => {
    let _v = [... list ];
    _v.push( e );
    setList( _v );
  }


  return (
    <>
      <MenuBar onClickAdd={ _ => setShowInput( !showInput ) } />
      <div className="wrapper">
        <header className="header">
          <h1>TO-DO list in blockchain</h1>
          <InputItem clickAdd={ handleClick } show={showInput} clickClose={ _ => setShowInput( false ) } />
          <List items={list} />
        </header>
      </div>
    </>
  )
}

export default App
