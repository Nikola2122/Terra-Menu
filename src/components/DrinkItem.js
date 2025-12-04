function DrinkItem(props){
    return (
        <div className={'item'}>
            <div className={'name-desc'}>
                <div className={'name-drink'}>
                    {props.name}
                </div>
                <div className={'desc'}>
                    {!!props.desc && props.desc}
                </div>
            </div>
            <div className={'price'}>
                {props.price}
            </div>
        </div>
    )
}

export default DrinkItem