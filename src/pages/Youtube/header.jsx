import header from "./header.module.css";

const Header = () => {
    return (
        <header>
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
        </header>
    )
}

export default Header