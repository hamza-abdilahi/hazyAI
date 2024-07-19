type Props = {
    functionality: "summarize" | "find" | "question" | "filter" | undefined
}

const Dropdown =  (props: Props) => {

return (
    <form>
        <select >
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
