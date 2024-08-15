import styles from './dropdown.module.css'

type Props = {
    functionality: "summarize" | "find" | "question" | "filter" | undefined
}

const Dropdown = (props: Props) => {

    return (
        <form className={styles.container}>
            <label className={styles.label}>What would you like to do?</label>
            <select className={styles.dropdown}>
                <option value={undefined}>- Select an option -</option>
                <option value={"summarize"}>Summarize</option>
                <option value={"find"}>Find and replace</option>
                <option value={"question"}>Ask a question</option>
                <option value={"filter"}>Filter information</option>
            </select>
        </form>
    )
}

export default Dropdown;
