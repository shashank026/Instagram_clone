import React from 'react'
import insta from '../Component/Image/instagram.png'
import '../Component/Home.css'
import PostCard from '../Component/Postcard'
import PostData from '../Component/Postdata'

const Home = () => {
    return (
        <>
            <header className="headerimg" style={{ textAlign: 'center', padding: '1rem' }}>
                <img src={insta} alt="Header logo" style={{ width: '25%' }} />
            </header>
            <div className="sc-bdfBwQ sc-iqHYGH cIKpxU hSaKRS" >
                {PostData.map((value) => {
                    return (
                        <PostCard 
                            likes={value.likes}
                            display_src={value.display_src}
                            caption={value.caption}
                            code={value.code}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Home