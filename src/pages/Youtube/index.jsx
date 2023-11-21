import React from 'react'
import video from "./video.module.css"
import img1 from "../../assets/thumbnail-1.webp"
import header from "./header.module.css";

const Youtube = () => {
  return (
    <div>
        <div className={header.header}>

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
                    <img  src="src/icons/voice-search-icon.svg"/>

                </button>
            </div>
            <div className={header.right_section}>
                right section
            </div>
        </div>
        <div className={video.video_grid}>
            <div className={video.video_preview}>
                <div className={video.video_preview_img}>
                    <img className={video.thumbnail} src={img1}/>
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