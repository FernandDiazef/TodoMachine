import './TodoSearch.css'

function TodoSearch(props) {
    
    return (
        <> 
            <div className="mb-4 d-flex justify-content-center align-items-center flex-sm-row flex-column">
                <input 
                    placeholder="Cortar Cebolla" 
                    className='class_input shadow'
                    value={props.searchValue}
                    onChange={(event) => {
                        props.setSearchValue(event.target.value);
                    }} />   
                {/* <select className='selectorDeTareas' onChange={(event) => props.FiltroSelect(event.target.value)}>
                    <option value='1'>Mostrar Todos</option>
                    <option value='2'>Completos</option>
                    <option value='3'>Incompletos</option>
                </select> */}
            </div>
        </>
    );
  }

  export { TodoSearch };