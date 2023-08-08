import Featured from "../../components/Featured/Featured"
import Slide from "../../components/Slide/Slide"
import TrustBy from "../../components/TrustBy/TrustBy"
import "./home.scss"
import { cards } from "../../data"
import CatCard from "../../components/CatCard/CatCard"

const Home = () => {
    return (
        <div>
            <Featured />
            <TrustBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>
        </div>
    )
}

export default Home