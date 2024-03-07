import './style.css';
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
    return (
        <main className="main">
            <div className="navbar">
                <div className="nav-logo">
                    <img src="/assets/img/monogram 3.png" className="nav-logo-1" alt="" />
                </div>
                <div className="menu">

                </div>
            </div>

            <div className="content">
                <div className="banner-1">
                    <img src="/assets/img/banner-img.png" alt="" className="banner-img-1" />
                    <img src="/assets/img/monogram white.png" alt="" className="banner-logo" />

                    <div className="social">
                    </div>

                    <h4 className="name">Muhammad <span>Daffa</span> Athalla</h4>
                    <h6 className="jobs">WEB DEVELOPER <span>|</span> LIVE2D SPECIALIST</h6>

                    <div className="act">
                        <a href="" className="commis">COMMISSION</a>
                        <a href="" className="portfolio">PORTFOLIO</a>
                    </div>
                </div>
                <div className="banner-2">
                    <div className="page-count">
                        <div className="count">01</div>
                        <div className="gap"></div>
                        <div className="pg-name">INTRODUCTION</div>
                    </div>
                    <div className="about">
                        <h4 className="t-about">ABOUT ME</h4>
                        <hr />
                        <p className="d-about">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptas sapiente ut repudiandae, rerum alias iusto tempora mollitia rem sed corrupti odit cupiditate? Nam amet sequi laboriosam sit architecto animi.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}