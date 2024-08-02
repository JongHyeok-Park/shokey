import './RegisterInfluencer.css';
import useRegisterInfluencer from '../hooks/useRegisterInfluencer';

function RegisterInfluencer() {
  const {
    handleChannelIdChange,
    handleSubscribersChange,
    handleNicheChange,
    handleProfileImageChange,
    handleSubmit,
		profileImage,
  } = useRegisterInfluencer();

  return (
    <form className='register-influencer' onSubmit={handleSubmit}>
        <div className='register-influencer-title'>인플루언서 등록</div>
        <div className='profile-upload'>
					{ profileImage ? (
						<img src={profileImage} alt="profile preview" />
						) : (
						<div className='profile-image' />
					)}
          <input
            type="file"
            onChange={handleProfileImageChange}
            className='upload-button'
          />
        </div>
        <div className='fields'>
          <div className='field'>
            <div className='field-name'>채널 ID</div>
            <input
              className='input'
              placeholder='채널'
              onChange={handleChannelIdChange}
            ></input>
          </div>
          <div className='field'>
            <div className='field-name'>구독자 수</div>
            <input
              className='input'
              placeholder='구독자 수'
              onChange={handleSubscribersChange}
            ></input>
          </div>
          <div className='field'>
            <div className='field-name'>분야</div>
            <input
              className='input'
              placeholder='분야'
              onChange={handleNicheChange}
              ></input>
          </div>
        </div>
        <button type='submit' className='register-button'>인플루언서 등록하기</button>
    </form>
  );
}

export default RegisterInfluencer;