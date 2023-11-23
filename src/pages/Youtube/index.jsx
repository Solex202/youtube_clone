// import React from 'react'
import video from "./video.module.css"
import img1 from "../../assets/thumbnail-1.webp"
import header from "./header.module.css";
import sidebar from "./sidebar.module.css";

const Youtube = () => {
  return (
    <div>
        <div className={header.headers}>

            <div className={header.left_section}>
                <img className={header.hamburger_menu} src="src/icons/hamburger-menu.svg"/>
                <img className={header.youtube_logo} src="src/icons/youtube-logo.svg"/>
            </div>
            <div className={header.middle_section}>
                <input className={header.search_bar} type='text' placeholder='search'/>
                <button className={header.search_button}>
                    <img  className={header.search_icon} src="src/icons/search.svg"/>
                </button>
                <button className={header.voice_search}>
                    <img className={header.voice_search_icon} src="src/icons/voice-search-icon.svg"/>
                </button>
            </div>
            <div className={header.right_section}>
                <img className={header.upload_icon} src="src/icons/upload.svg"/>
                <img className={header.youtube_apps_icon} src="src/icons/youtube-apps.svg"/>
                <div className={header.notification_icon_container}>
                    <img className={header.notifications_icon} src="src/icons/notifications.svg"/>
                    <div className={header.notifications_count}>3</div>
                </div>
                <img className={header.profile_picture} src="src/channels/channel-1.jpeg"/>
            </div>
        </div>

        <div className={sidebar.sidebars}>
            sidebar
        </div>
        <div className={video.video_grid}>
            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src={img1}/>
                    <div className={video.video_time}>
                        11:20
                    </div>

                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src\channels\channel-1.jpeg'/>
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
                    <img className={video.thumbnail} src="src/assets/thumbnail-2.webp"/>
                    <div className={video.video_time}>
                        11:20
                    </div>
                </div>
                <div className={video.video_info_grid}>
                    <div className={video.channel_picture}>
                        <img className={video.profile_picture} src='src/channels/channel-2.jpeg'/>
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