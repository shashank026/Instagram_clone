import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Postcard = (props) => {
    const [like, setlike] = useState(props.likes);
    const increaselike = () => {
        setlike(like + 1);
    }
    return (
        <>
            <div className="post">
                <NavLink to={props.code} >
                    <div style={{ position: 'relative' }}>
                        <img src={props.display_src} alt="Post thumbnail" width="100%" height="auto" className="sc-jSgupP ckDfJz" />
                    </div>
                </NavLink>
                <div className="sc-gsTCUz sc-pFZIQ bhdLno gbgfMs">
                    <p>{props.caption}</p>
                    <div className="sc-bdfBwQ sc-jrAGrp cIKpxU dXWCyY">
                        <button onClick={increaselike} className="sc-hKgILt gTLZXx" style={{ margin: '0.5rem 0.5rem 0.5rem 0px' }}>
                            <span className="sc-kEjbxe jbJDWL">💙</span>
                            <span className="sc-kEjbxe jbJDWL" >{like}</span>
                        </button>
                        <button className="sc-hKgILt gTLZXx" style={{ margin: '0.5rem 0.5rem 0.5rem 0px' }}>
                            <span className="sc-kEjbxe jbJDWL">💬</span>
                            <span className="sc-kEjbxe jbJDWL">4</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postcard