import React, {useState} from 'react'


const Commentpost = (props) => {
    const [like, setlike] = useState(props.likes);
    const increaselike = () => {
        setlike(like + 1);
    }
    return (
        <>
            <div className="sc-gsTCUz sc-bqyKva bhdLno ehfErK">
                <div style={{position:'relative', width:'100%'}} >
                    <img className="sc-kstrdz btjemE" src={props.display_src} alt='comment logo'/>
                </div>
                <div className="sc-gsTCUz sc-hBEYos bhdLno dWjUC">
                    <p>{props.caption}</p>
                    <div className="sc-bdfBwQ sc-fodVxV cIKpxU cYLuAZ">
                        <button onClick={increaselike} className="sc-hKgILt gTLZXx" style={{boxShadow:'rgb(238, 238, 238) 1px 1px 2px 2px', margin:'0.5em 0.5em 0.5em 0px'}}>
                            <span className="sc-kEjbxe jbJDWL">💙</span>
                            <span className="sc-kEjbxe jbJDWL">{like}</span>
                        </button>
                        <button className="sc-hKgILt gTLZXx" style={{boxShadow:'rgb(238, 238, 238) 1px 1px 2px 2px', margin:'0.5em 0.5em 0.5em 0px'}}>
                            <span className="sc-kEjbxe jbJDWL">💬</span>
                            <span className="sc-kEjbxe jbJDWL">4</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Commentpost