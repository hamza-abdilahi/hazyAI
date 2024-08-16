import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { Action } from '../../App'
import styles from './dropdown.module.css'

type Props = {
  setAction: Dispatch<SetStateAction<Action>>
  action?: Action
}

const Dropdown = (props: Props) => {
  const onChange = (event: BaseSyntheticEvent) => {
    const value = event.target.value;
    props.setAction(value);
  };

  return (
    <form className={styles.container}>
      {/* <label className={styles.label}>What would you like to do?</label> */}
      <select className={styles.dropdown} onChange={onChange}>
        <option disabled selected>- What would you like to do? -</option>
        <option value={"summarize"}>Summarize</option>
        <option value={"impact assessment"}>Create Impact Assessment</option>
        <option value={"find"}>Find and replace</option>
        <option value={"question"}>Ask a question</option>
        <option value={"filter"}>Filter information</option>
      </select>
    </form>
  )
}

export default Dropdown;
