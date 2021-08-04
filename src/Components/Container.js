import React from 'react'
import style from './Container.module.css'
import LeftSideContainer from './LeftSideContainer/LeftSideContainer'
import RightSideContainer from './RightSideContainer/RightSideContainer'

function Container() {
    return (
        <div className={style.container}>
           <LeftSideContainer/>
           <RightSideContainer/>
        </div>
    )
}

export default Container
