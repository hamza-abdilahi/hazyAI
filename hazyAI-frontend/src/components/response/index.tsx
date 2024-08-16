import { ImpactAssessment } from "../../services/generateImpactAssessment";
import './response.module.css'

type Props = {
  response: ImpactAssessment | string | null
}

const Response = (props: Props) => {

  if (!props.response) {
    return (
      <div>
      </div>
    )
  }

  if (typeof props.response === 'string') {
    return (
      <div>
        <h2>Summary</h2>
        <p>
          {props.response}
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2>Impact Assessment</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>{props.response?.title}</th>
        </tr>
        <tr>
          <td>Summary</td>
          <td>{props.response?.summary}</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>{props.response?.type}</td>
        </tr>
        <tr>
          <td>Scope</td>
          <td>{props.response?.scope}</td>
        </tr>
        <tr>
          <td>Effort</td>
          <td>{props.response?.effort}</td>
        </tr>
      </table>
    </div>
  )
}

export default Response;
