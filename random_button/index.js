
import styles from './Random.module.css';

const Random = ({ setInput }) => {
  const getrandomBit = () => {
    const randomBit = Math.floor(Math.random() * 32);
    setInput(randomBit);
  };

  return (
    <>
    <div className={styles.randomOuterContainer}>
        <div className={styles.randomContainer}>
        <button onClick={getrandomBit} className={styles.randomButton}>
            Randomize
        </button>
        </div>      
    </div>    
    </>
  );
};

export default Random;


