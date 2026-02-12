import Button from './components/Button'
import Numbers from './components/Numbers';
import { useAppDispatch} from './store/hook'
import useNumber from './hooks/useNumbers';
import styles from './App.module.css';
import Input from './components/Input';

const App = () => {
  const {start, erase} = useNumber()
  const dispatch = useAppDispatch()
  const go = () => dispatch(start)
  const clean = () => dispatch(erase)
  return <div className={`${styles.body}`}>
   <header className={`${styles.header}`}>
      <h1>MEGA-SENA</h1>
   </header>
   <div className={`${styles.Appheader}`}>
      <div>
         <div>
            <Button className={`btn btn-success ${styles.button}`} onClick={go} txt="Sortear"/>
            <Button className={`btn btn-danger ${styles.button}`} onClick={clean} txt="Limpar"/>
         </div>
      </div>
      <Numbers />
   </div>
   <footer>
      <small>Feito por Leonardo Marcatti</small>
   </footer>
</div>
}

export default App
