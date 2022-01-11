import React from 'react';
import s from '../remote/Remote.module.css'
import styleContainer from './../common/styles/Container.module.css'

function Remote() {
    return (
        <div className={ ` ${s.remoteBlock} `}>
            <div className={ ` ${styleContainer.container}  ${s.text}`}>
                <h1>I am available for freelance and remote work</h1>
                <button>Hire me</button>
            </div>

        </div>
    )
}

export default Remote;