import SubmitBtn from "../submitButton";
import { Dispatch, SetStateAction } from "react";
import styles from './textInput.module.css'

type Props = {
    value: string
    placeholder: string
    setPrompt: Dispatch<SetStateAction<string>>
    handleGenerate: () => void
}

const TextInput = (props: Props) => {
    return (
        <form className={styles.textContainer}>
            <textarea className={styles.textArea} id="textInput" name="" rows={8} cols={50} onChange={(e) => props.setPrompt(e.target.value)} value={props.value} placeholder={props.placeholder}></textarea>
            <SubmitBtn handleGenerate={props.handleGenerate} />
        </form>
    )
}

export default TextInput;
