// import { Player } from '@lottiefiles/react-lottie-player';
import styles from './submitButton.module.css'
// import animatedArrow from '../../assets/animated-arrow.json'

type Props = {
  handleGenerate: () => void
}

const SubmitBtn = (props: Props) => {

  return (
    <button onClick={props.handleGenerate} type="button" className={styles.button}>
      GO!
      {/* <Player
                autoplay
                loop
                src={animatedArrow}
                style={{ height: '300px', width: '300px' }}
            /> */}
    </button>
  )
}

export default SubmitBtn;