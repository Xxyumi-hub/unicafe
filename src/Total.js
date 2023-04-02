const Total = ({parts}) => {
    return (
        <p><b>Number of exercises {parts.reduce((previous, current) => {
            return previous + current.exercises
        }, 0)}</b></p>
    )
}
export default Total;