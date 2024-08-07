import { useState } from "react";
import {  } from "../apis/influencerApi";
import { useNavigate } from "react-router-dom";

function useInfluencerInfo(id) {
  const [channelId, setChannelId] = useState("");
  const [subscribers, setSubscribers] = useState("");
  const [niche, setNiche] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const []
  
  const navigate = useNavigate();

  const handleChannelIdChange = (e) => {
    setChannelId(e.target.value);
  };

  const handleSubscribersChange = (e) => {
    setSubscribers(e.target.value);
  };

  const handleNicheChange = (e) => {
    setNiche(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!channelId.trim()) {
      alert("채널 ID를 입력해주세요.");
      return;
    }
    if (!subscribers.trim()) {
      alert("구독자 수를 입력해주세요.");
      return;
    }
    if (!niche.trim()) {
      alert("분야를 입력해주세요.");
      return;
    }

    try {
      const res = await registerInfluencer({ id, channelId, subscribers, niche, profileImage });
      console.log(res.statusMsg);
      navigate(`/view-influencer/${userId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    handleChannelIdChange,
    handleSubscribersChange,
    handleNicheChange,
    handleProfileImageChange,
    handleSubmit,
	  profileImage,
  };
};

export default useInfluencerInfo;