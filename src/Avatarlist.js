import React from 'react';

const Avatarlist = (props)=>{
    return(
        <div className='avatarStyle ma4 bg-light-purple dib pa3 tc grow shadow-4'>
                <img src={`https://joeschmoe.io/api/v1/${props.name}`}t="avatar"/>
                <h1 className="tc">{props.name}</h1>
                <p>{props.work}</p>
        </div>
    )
}

export default Avatarlist;