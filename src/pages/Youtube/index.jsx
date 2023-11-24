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
                    <div className={header.tooltip}>Search</div>
                </button>
                <button className={header.voice_search}>
                    <img className={header.voice_search_icon} src="src/icons/voice-search-icon.svg"/>
                    <div className={header.tooltip}>Search with your voice</div>
                </button>
            </div>
            <div className={header.right_section}>
                <div className={header.upload_icon_container}>
                    <img className={header.upload_icon} src="src/icons/upload.svg"/>
                    <div className={header.tooltip}>Create</div>
                </div>
                <div className={header.youtube_apps_icon_container}>
                    <img className={header.youtube_apps_icon} src="src/icons/youtube-apps.svg"/>
                    <div className={header.tooltip}>Youtube apps</div>

                </div>
                <div className={header.notification_icon_container}>
                    <img className={header.notifications_icon} src="src/icons/notifications.svg"/>
                    <div className={header.notifications_count}>3</div>
                    <div className={header.tooltip}>Notifications</div>
                </div>
                <img className={header.profile_picture} src="src/channels/channel-1.jpeg"/>
            </div>
        </div>

        <div className={sidebar.sidebars}>
            <div className={sidebar.sidebars_box}>
                <img className={sidebar.home} src="src/sidebars/home.svg"/>
                <div>Home</div>
            </div>
            <div className={sidebar.sidebars_box}>
                <img className={sidebar.explore} src="src/sidebars/explore.svg"/>
                <div>Explore</div>
            </div>
            <div className={sidebar.sidebars_box}>
                <img className={sidebar.subscriptions} src="src/sidebars/subscriptions.svg"/>
                <div>Subscriptions</div>
            </div>
            <div className={sidebar.sidebars_box}>
                <img className={sidebar.originals} src="src/sidebars/originals.svg"/>
                <div>Originals</div>
            </div>
            <div className={sidebar.sidebars_box}>
                <img className={sidebar.youtube_music} src="src/sidebars/youtube-music.svg"/>
                <div>YouTube Music</div>
            </div>
            <div className={sidebar.sidebars_box}>
                <img className={sidebar.library} src="src/sidebars/library.svg"/>
                <div>Library</div>
            </div>
        </div>
        <div className={video.video_grid}>
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
                    <img className={video.thumbnail} src="src/assets/thumbnail-2.webp"/>
                    <div className={video.video_time}>
                        1:19:34
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