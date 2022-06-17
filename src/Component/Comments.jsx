import React, { useState } from 'react'
import insta from '../Component/Image/instagram.png'
import '../Component/Home.css'
import { useParams } from 'react-router-dom'
import Commentpost from './Commentpost'
import PostData from '../Component/Postdata'
import CommentData from '../Component/CommentData'
import { Link } from 'react-router-dom'

const Comments = () => {
    const [user, setUser] = useState("");
    const [text, setText] = useState("");
    const [Comment, setComment] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setComment([...Comment, {User: user, Text: text}])
        e.target.reset();
    }
    const { code } = useParams();
    return (
        <>
            <div className="sc-crrsfI iDhzRL">
                <header className="headerimg" style={{ textAlign: 'center', padding: '1rem' }}>
                    <Link to="/">
                        <img src={insta} alt="Header logo" style={{ width: '25%' }} />
                    </Link>
                </header>

                <div className="sc-bdfBwQ sc-dQppl cIKpxU cQZIoF">
                    {PostData.map((value) => {
                        if (value.code === code) {
                            return (
                                <Commentpost
                                    likes={value.likes}
                                    display_src={value.display_src}
                                    caption={value.caption}
                                />
                            )
                        }
                    })}

                    <div className="sc-gsTCUz sc-bkzZxe bhdLno cSnsVU">
                        {CommentData[code] && CommentData[code].map((value) => {
                            return (
                                <>
                                    <div className="sc-fFubgz bjNVbG">
                                        <span className="sc-idOhPF kGntgQ">{value.user}</span>
                                        <span className="sc-dIUggk XavQL">{value.text}</span>
                                    </div>
                                </>
                            )
                        })}
                        {Comment && Comment.map((value) => {
                            return (
                                <>
                                    <div className="sc-fFubgz bjNVbG">
                                        <span className="sc-idOhPF kGntgQ">{value.User}</span>
                                        <span className="sc-dIUggk XavQL">{value.Text}</span>
                                    </div>
                                </>
                            )
                        })}
                        <form className="sc-hHftDr kCQmsc" onSubmit={handleSubmit}>
                            <input type="text" required placeholder="Author" className="sc-dmlrTW guKkvw" onChange={(e) => setUser(e.target.value)} />
                            <input required placeholder="Comment" type="text" className="sc-dmlrTW guKkvw" onChange={(e) => setText(e.target.value)} />
                            <button type="submit" style={{ visibility: 'hidden' }}>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Comments