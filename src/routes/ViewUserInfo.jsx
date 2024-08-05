import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useUserInfo from '../hooks/useUserInfo';
import './UserInfo.css';
import useUserStore from '../store/userStore';

const ViewUserInfo = () => {
  const { id } = useParams();
  const { userInfo, handleDeleteUserInfo } = useUserInfo(id);
	const storeId = useUserStore(state => state.id);

  return (
    <div className="user-info-container">
      <h2 className="title">사용자 정보 조회</h2>
      <div className="fields">
        <div className="field">
          <span className="field-name">아이디</span>
          <span className="field-value">{userInfo.userId}</span>
        </div>
        <div className="field">
          <span className="field-name">이름</span>
          <span className="field-value">{userInfo.userName}</span>
        </div>
        <div className="field">
          <span className="field-name">성별</span>
          <span className="field-value">{userInfo.userGender ? '남성' : '여성'}</span>
        </div>
        <div className="field">
          <span className="field-name">이메일</span>
          <span className="field-value">{userInfo.userEmail}</span>
        </div>
        <div className="field">
          <span className="field-name">인플루언서 여부</span>
          <span className="field-value">{userInfo.userRole ? '인플루언서' : '일반 사용자'}</span>
        </div>
      </div>
			{
				(id == storeId) &&
        <div className="buttons">
          <Link to={`/update-users/${id}`} className="update-button">수정하기</Link>
          <button onClick={handleDeleteUserInfo} className="delete-button">삭제하기</button>
        </div>
      }
    </div>
  );
};

export default ViewUserInfo;