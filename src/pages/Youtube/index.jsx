// import React from 'react'
import video from "./video.module.css"
import img1 from "../../assets/thumbnail-1.webp"
import Sidebar from "./sidebar.jsx";
import Header from "./header.jsx";

const Youtube = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className={video.video_grid}>
            <div className={video.video_preview} >
                <a className={video.link} href='https://www.youtube.com/watch?v=31SUabPZY1w'>
                    <div className={video.video_preview_img}  >
                        <img className={video.thumbnail} src="src/assets/thumbnail-2.webp"/>
                        <div className={video.video_time}>
                            1:19:34
                        </div>
                    </div>
                </a>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <a href="https://www.youtube.com/channel/UC5l5v2XtcDd-CKLdI8HLIQg">
                            <img className={video.profile_picture} src='src/channels/channel-2.jpeg'/>
                        </a>
                    </div>
                    <div className={video.video_info}>
                        <a className={video.link} href='https://www.youtube.com/watch?v=31SUabPZY1w'>
                            <p className={video.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        </a>
                        <a className={video.link} href='https://www.youtube.com/channel/UC5l5v2XtcDd-CKLdI8HLIQg'>
                            <p className={video.video_author}>Lotachukwu Onwuka</p>
                        </a>
                        <p className ={video.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src={img1}/>
                    <div className={video.video_time}>
                        19:54
                    </div>
                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={video.video_info}>
                        <p className={video.video_title}>Talking Tech and AI with Senior dev Lota and leveraging on the awesomeness of html and css</p>
                        <p className={video.video_author}>Lotachukwu Onwuka</p>
                        <p className ={video.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>



            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src="src/assets/thumbnail-3.webp"/>
                    <div className={video.video_time}>
                        11:20
                    </div>
                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src/channels/channel-3.jpeg'/>
                    </div>
                    <div className={video.video_info}>
                        <p className={video.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={video.video_author}>Lotachukwu Onwuka</p>
                        <p className ={video.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src="src/assets/thumbnail-4.webp"/>
                    <div className={video.video_time}>
                        5:20:45
                    </div>
                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src/channels/channel-4.jpeg'/>
                    </div>
                    <div className={video.video_info}>
                        <p className={video.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={video.video_author}>Lotachukwu Onwuka</p>
                        <p className ={video.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src="src/assets/thumbnail-5.webp"/>
                    <div className={video.video_time}>
                        0:50
                    </div>
                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src/channels/channel-5.jpeg'/>
                    </div>
                    <div className={video.video_info}>
                        <p className={video.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={video.video_author}>Lotachukwu Onwuka</p>
                        <p className ={video.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src="src/assets/thumbnail-6.webp"/>
                    <div className={video.video_time}>
                        1:20:12
                    </div>
                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src/channels/channel-6.jpeg'/>
                    </div>
                    <div className={video.video_info}>
                        <p className={video.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={video.video_author}>Lotachukwu Onwuka</p>
                        <p className ={video.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src="src/assets/lil sis.webp"/>
                    <div className={video.video_time}>
                        2:02:20
                    </div>
                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src/channels/channel-7.jpeg'/>
                    </div>
                    <div className={video.video_info}>
                        <p className={video.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={video.video_author}>Lotachukwu Onwuka</p>
                        <p className ={video.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Youtube