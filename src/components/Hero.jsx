import './Hero.css'
import HeaderImg from '../assets/header1.svg';

function Hero() {
  return (
    <section className="HeroSection">
        <div className="Firstpart">
            <h1 className="bodytitle">
                Become More Than What You Learn
            </h1>
            <p className="desc">
            At AppForLearning, we believe in the power of knowledge to transform lives. Discover tools, courses, and resources that fuel your growth.
            </p>
        </div>
        <div className="Secondpart">
            <img src={HeaderImg} className="Heroimg" alt="Hero Image" />
        </div>
    </section>
  )
}

export default Hero