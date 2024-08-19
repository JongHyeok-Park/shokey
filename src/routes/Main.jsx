import './Main.css';
import heroImage from '/hero_image.png';
import playIcon from '../assets/play_icon.png';
import InfluencerCard from '../components/card/InfluencerCard';
import useInfluencerList from '../hooks/useInfluencerList';

function Main() {
  const { influencerList } = useInfluencerList();

  return (
    <main className="main">
      <section className="hero-section">
        <div className="left">
          <article className="main-title-container">
            <span className="main-title-upper">INFLUENCER / SHOKEYS BOOKING</span>
            <h1 className="main-title">
              Find the perfect influencer / SHOKEYs for your campaign
            </h1>
            <h3 className="main-subtitle">
              Connect with influencers / SHOKEYs who share your brand's values and reach your target audienc
            </h3>
          </article>
          <div className="main-btn-container">
            <button className="main-browse-btn">
              Browse influencers/SHOKEYs
            </button>
            <button className="main-play-btn">
              <img src={playIcon} alt="play-icon" />
              Watch how it works
            </button>
          </div>
        </div>
        <div className="right">
          <img className="main-hero-image" src={heroImage} alt="hero-image" />
        </div>
      </section>
      <section className="influencer-section">
        <h2 className="influencer-section-title">Top influencers/SHOKEYs</h2>
        <section className="influencer-list-container">
          {
            influencerList.map((item, i) => {
              return <InfluencerCard 
                        key={i}
                        userName={item.userInfo.userName}
                        verified={item.verified}
                        // profile_image={item.profile_image}
                        profile_image={"https://picsum.photos/500.jpg?random" + i}
                        subscribers={item.subscribers} />
            })
          }
        </section>
      </section>
    </main>
  )
}

export default Main;