import { useState, useEffect } from 'react'
import './sass/index.scss'
import { InputItem } from './components/InputItem'
import { List } from './components/List'
import { MenuBar } from './components/MenuBar'
import { Item, Status } from './models/Item'

function mock(){
  

  const _data = ['Criar Readme.md', 'Estilo da Lista', 'Estilo dos Itens',
    'Alteração de Status dos items', 'Titulo, icones e configuração da página',
    'Ações dos botões do menu', 'Seleção de tema', 'Integração com contrato']
      .map( _item => {
        let o = new Item();
        o.title = _item;
        o.status = Status.ToDo;
        return o;
      });
    _data[0].status = Status.Doing;
    return _data;

}



function App() {
  const [list, setList] = useState([  ])
  const [showInput, setShowInput] = useState(false);
  const [ init , setInit] = useState(false);

  useEffect(() => {
    if(!init){
      // let _list = mock();
      let _list = [];
      
      setList(_list);

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
    _v.push( new Item(e) );
    setList( _v );
  }


  return (
    <>
      <MenuBar onClickAdd={ _ => setShowInput( !showInput ) } />
      <div className="wrapper">
        <header className="header">
          <h1>TO-DO list in blockchain</h1>
          <InputItem clickAdd={ handleClick } show={ showInput }
            clickClose={ _ => setShowInput( false ) } />
          <List items={list} />
        </header>
      </div>
    </>
  )
}

export default App
