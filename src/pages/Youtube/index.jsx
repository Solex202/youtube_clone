import React from 'react'
import style from "../Youtube/index.module.css"
import img1 from "../../assets/thumbnail-1.webp"

const Youtube = () => {
  return (
    <div>
        <input className={style.search_bar} type='text' placeholder='search'/>
        <div className={style.video_grid}>
            <div className={style.video_preview}>
                <div className={style.video_preview_img}>
                    <img className={style.thumbnail} src={img1}/>
                </div>
                <div className={style.video_info_grid}>
                    <div className={style.channel_picture}>
                        <img className={style.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={style.video_info}>
                        <p className={style.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={style.video_author}>Lotachukwu Onwuka</p>
                        <p className ={style.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={style.video_preview}>
                <div className={style.video_preview_img}>
                    <img className={style.thumbnail} src={img1}/>
                </div>
                <div className={style.video_info_grid}>
                    <div className={style.channel_picture}>
                        <img className={style.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={style.video_info}>
                        <p className={style.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={style.video_author}>Lotachukwu Onwuka</p>
                        <p className ={style.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={style.video_preview}>
                <div className={style.video_preview_img}>
                    <img className={style.thumbnail} src={img1}/>
                </div>
                <div className={style.video_info_grid}>
                    <div className={style.channel_picture}>
                        <img className={style.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={style.video_info}>
                        <p className={style.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={style.video_author}>Lotachukwu Onwuka</p>
                        <p className ={style.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={style.video_preview}>
                <div className={style.video_preview_img}>
                    <img className={style.thumbnail} src={img1}/>
                </div>
                <div className={style.video_info_grid}>
                    <div className={style.channel_picture}>
                        <img className={style.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={style.video_info}>
                        <p className={style.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={style.video_author}>Lotachukwu Onwuka</p>
                        <p className ={style.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={style.video_preview}>
                <div className={style.video_preview_img}>
                    <img className={style.thumbnail} src={img1}/>
                </div>
                <div className={style.video_info_grid}>
                    <div className={style.channel_picture}>
                        <img className={style.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={style.video_info}>
                        <p className={style.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={style.video_author}>Lotachukwu Onwuka</p>
                        <p className ={style.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={style.video_preview}>
                <div className={style.video_preview_img}>
                    <img className={style.thumbnail} src={img1}/>
                </div>
                <div className={style.video_info_grid}>
                    <div className={style.channel_picture}>
                        <img className={style.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={style.video_info}>
                        <p className={style.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={style.video_author}>Lotachukwu Onwuka</p>
                        <p className ={style.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>

            <div className={style.video_preview}>
                <div className={style.video_preview_img}>
                    <img className={style.thumbnail} src="src/assets/lil sis.webp"/>
                </div>
                <div className={style.video_info_grid}>
                    <div className={style.channel_picture}>
                        <img className={style.profile_picture} src='src\channels\channel-1.jpeg'/>
                    </div>
                    <div className={style.video_info}>
                        <p className={style.video_title}>Talking Tech and AI with Senior dev Lota</p>
                        <p className={style.video_author}>Lotachukwu Onwuka</p>
                        <p className ={style.video_stats}>3.4M views &#183; 6 months ago </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Youtube