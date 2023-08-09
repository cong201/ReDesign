import Featured from "../../components/Featured/Featured"
import Slide from "../../components/Slide/Slide"
import TrustBy from "../../components/TrustBy/TrustBy"
import "./home.scss"
import { cards } from "../../data"
import CatCard from "../../components/CatCard/CatCard"

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>A whole world of freelance talent at your fingertips</h1>
                        <div className="title">
                            <img className="imgs" src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                        <div className="title">
                            <img className="imgs" src="./img/check.png" alt="" />
                            Quality work done quickly
                        </div>
                        <p>
                            Find the right freelancer to begin working on your project within
                            minutes.
                        </p>
                        <div className="title">
                            <img className="imgs" src="./img/check.png" alt="" />
                            Protected payments, every time
                        </div>
                        <p>
                            Always know what you'll pay upfront. Your payment isn't released
                            until you approve the work.
                        </p>
                        <div className="title">
                            <img className="imgs" src="./img/check.png" alt="" />
                            24/7 support
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                    </div>
                    <div className="item">
                        <img className="img" src="./img/video.jpg" />
                    </div>
                </div>
            </div>
            <div className="explore">
                <div className="container">
                    <h1>Explore the marketplace</h1>
                    <div className="items">
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Graphics & Design</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                                alt=""
                            />
                            <div className="line"></div>

                            <span>Digital Marketing</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Writing & Translation</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Video & Animation</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Music & Audio</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Programming & Tech</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Business</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Lifestyle</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Data</span>
                        </div>
                        <div className="item">
                            <img
                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                                alt=""
                            />
                            <div className="line"></div>
                            <span>Photography</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home