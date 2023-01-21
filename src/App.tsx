import { useState } from 'react'
import styles from 'styles/app.module.scss'
import Side from './components/side/index';
import Chart from './components/chart/index'
import Header from './components/header/index'

const App: React.FC = () => {
  
  return (
    <div className={styles.app}>
      <header >
        <Header/>
      </header>
      <br />
      <Side/>
      <main className={styles.appMain}>
        <div className={styles.appRow}>
            <div className={styles.appMainDiv}>
              nome do investe
              <div className={styles.appChart}>
              <Chart/>
              </div>
            </div>
            <div className={styles.appMainDiv}>
            <div className={styles.appChart}>
              <Chart/>
              </div>
            </div>
            <div className={styles.appMainDiv}>
            <div className={styles.appChart}>
              <Chart/>
              </div>
            </div>
            <div className={styles.appMainDiv}>
            <div className={styles.appChart}>
              <Chart/>
              </div>
            </div>
            <div className={styles.appMainDiv}>
            <div className={styles.appChart}>
              <Chart/>
              </div>
            </div>
            <div className={styles.appMainDiv}>
            <div className={styles.appChart}>
              <Chart/>
              </div>
            </div>
            
            <br />
            <span style={{color:"transparent"}}>Spcci</span>
        </div>
        
      </main>
      
    </div>
  )
}

export default App
