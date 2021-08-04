import style from './CountContainer.module.css'

function CountContainer(props) {
    const isActive = props.active ?`${style.container__selected}`:''
    const isRed= props.active && props.isRed?`${style.container__selectedRed}`:''
    return (
        <div className={`${style.container} ${isActive} ${isRed}`}
        onClick={props.onClick}> 
            <div className={style.subContainer}>
            <p  className={style.p1}>{props.title}</p>
            <h2 className={style.h2}>+{props.cases}</h2>
            <p  className={style.p2}>{props.total} Total</p>
            </div>
        </div>
    )
}

export default CountContainer
