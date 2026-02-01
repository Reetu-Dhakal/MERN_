
const Greet = (props) => {
    console.log(props)
    return(
        <div>
            <h1>This is not good greeting i got {props.user}</h1>
        </div>
    )

}
export default Greet