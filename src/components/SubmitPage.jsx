import React from 'react'
import styles from './SubmitPage.module.css'

function SubmitPage({submitValue}) {
  return (
    <div className={styles.container}>
        <img src='./src/images/illustration-thank-you.svg' />
        
            <p className={styles.result}>You selected {submitValue} out of 5</p>
       
        <h2 className={styles.thankYou}>Thank you!</h2>
        <p className={styles.description}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default SubmitPage