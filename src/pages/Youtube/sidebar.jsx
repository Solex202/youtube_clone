import sidebar from "./sidebar.module.css";
const Sidebar = () => {
    return (
        <div>
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
        </div>
    )
}

export default Sidebar