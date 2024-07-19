type Props = {
    response: string | undefined
}

const Response =  (props: Props) => {

return (
<div>
    <h1>Response</h1>
    <p>
        {props.response}
    </p>
</div>
)
}

export default Response;
