import styles from './Rating.module.css'
import React, { useState } from 'react'
import SubmitPage from './SubmitPage'


function Rating() {

  const [selectRating, setSelectRating] = useState()
  const [submitStatus, setSubmitStatus] = useState(false)

  function ratingHandler(rating){
      setSelectRating(rating)
  }

  function submitHandler(){
    setSubmitStatus(true)
  }

  


  return ( submitStatus ? (<SubmitPage submitValue={selectRating} />): (<form className={styles.container}>
  <img className={styles.logo} src='./src/images/icon-star.svg' ></img>
  <h2 className={styles.title}>How did we do?</h2>
  <p className={styles.description}> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
  

  <div className={styles.buttonContainer} >
      {[1,2,3,4,5].map((rating)=> <button type='button' onClick={()=>ratingHandler(rating)} className={styles.buttonNum}>{rating}</button>)}
      {/* <button type='button' onClick={()=>ratingHandler(1)} className={styles.buttonNum}>1</button>
      <button type='button' onClick={()=>ratingHandler(2)} className={styles.buttonNum}>2</button>
      <button type='button' onClick={()=>ratingHandler(3)} className={styles.buttonNum}>3</button>
      <button type='button' onClick={()=>ratingHandler(4)} className={styles.buttonNum}>4</button>
      <button type='button' onClick={()=>ratingHandler(5)} className={styles.buttonNum}>5</button> */}
  </div>

  <button onClick={submitHandler} disabled={selectRating === undefined} className={styles.buttonSubmit}>SUBMIT</button>
</form>)
)}

export default Rating