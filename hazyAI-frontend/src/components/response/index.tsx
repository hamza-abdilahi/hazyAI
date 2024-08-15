type Props = {
    response: string | undefined
}

const Response = (props: Props) => {

    return (
        <div>
            <h2>Response</h2>
            <p>
                {props.response}
            </p>
        </div>
    )
}

export default Response;
