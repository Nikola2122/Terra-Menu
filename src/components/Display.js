function Display(props) {
    return (
        <div>
            {props.whatToShow === 'Salads' ?
                (
                    <div>salad</div>
                ) :
                (
                    <div>smth else</div>
                )
            }
        </div>
    )
}

export default Display