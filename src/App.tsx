import LogicaCountDowm from './components/LogicaCountDowm'
import './App.css'




function App() {
  
  function gol(){
      
   alert('clicou')
  }

  return (
    <>
       <section className='time'>
          
          <label htmlFor="number">Cronometro</label>
          <input type="number" id="number" name="number" placeholder="Digite um tempo a ser cronometrado" />
           
          <div>
          <LogicaCountDowm/>
          </div>

       </section>
      

    </>
  )
}

export default App
