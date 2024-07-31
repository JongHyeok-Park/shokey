import './Card.css'
import verifiedBadge from '/verifiedBadge.png'

export function InfluencerCard({influencerInfo, platformImgSrc}) {
  return (
    <div className='card-container'>
      <img className='card-image' src={influencerInfo.profileImgSrc} alt="profileImg"></img>
      <div className='card-info'>
      <div className='title-container'>
          <span className='title'>
            {influencerInfo.userName}
          </span>
          {influencerInfo.isVerified &&
            <img id="verifiedBadge" src={verifiedBadge} alt="verifiedBadge"></img>
          }
        </div>
        <div className='card-detail'>
          <img id='platform-image' src={platformImgSrc}></img>
          <span id='subscribers'>{influencerInfo.subscribers}</span>
          명
        </div>
      </div>
    </div>
  )
}

export function PostCard({postInfo, userName}) {
  return (
    <div className='card-container'>
      <img className='card-image' src={postInfo.postImgSrc}></img>
      <div className='card-info'>
        <span className='card-detail'>
          {userName}
        </span>
        <div className='title-container'>
          <img src={postInfo.platformImgSrc} alt="platformImgSrc"></img>
          <span className='title'>
            {postInfo.title}
          </span>
        </div>
      </div>
    </div>
  )
}