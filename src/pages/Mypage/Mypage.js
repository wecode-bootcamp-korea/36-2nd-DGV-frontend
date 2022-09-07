import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import userIconImage from '../../assets/Mypage/userIcon.svg';
import pencilImage from '../../assets/Mypage/pencil.svg';
import { API } from '../../components/config/config.js';

function Mypage() {
  const [userInfo, setUserInfo] = useState();

  const page = useLocation();
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch(API.mypage, {
      method: 'GET',
      headers: { authorization: token },
    })
      .then(res => res.json())
      .then(res => setUserInfo(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MypageWrapper>
        <UserInfoWrapper>
          {userInfo ? (
            <IconUserImage
              src={userInfo.profie_image_url}
              alt="userProfileImage"
            />
          ) : (
            <UserIcon>
              <SubUserIcon>
                <IconImage src={userIconImage} alt="defaultProfileImage" />
              </SubUserIcon>
            </UserIcon>
          )}

          <UserInfo>
            <UserDescription>
              {userInfo ? (
                <UserNickName>{userInfo.nickname}</UserNickName>
              ) : (
                <UserNickName>무명님</UserNickName>
              )}
              {userInfo ? (
                <UserEmail>{userInfo.email}</UserEmail>
              ) : (
                <UserEmail>이메일없음</UserEmail>
              )}
              {/* <UserNickNameLabel>닉네임:</UserNickNameLabel>
              <UserNickNameSet>닉네임을 설정해주세요</UserNickNameSet> */}

              <ChangeNickName />
            </UserDescription>
            <CustomerStatus>
              고객님은 <CustomerLevel>일반</CustomerLevel>회원입니다.
            </CustomerStatus>
          </UserInfo>
        </UserInfoWrapper>

        <UserContentsWrapper>
          <SideBar>
            <ul>
              <MyDgvHome stat={page.pathname}>
                <MyDgvHomeLink to="/mypage" stat={page.pathname}>
                  MY DGV Home
                </MyDgvHomeLink>
              </MyDgvHome>
              <GoToReservedPage stat={page.pathname}>
                <GoToReservedPageLink to="bookedlist" stat={page.pathname}>
                  나의 예매 내역
                </GoToReservedPageLink>
              </GoToReservedPage>
            </ul>
          </SideBar>
          <Contents>
            <Outlet />
          </Contents>
        </UserContentsWrapper>
      </MypageWrapper>
    </div>
  );
}

export default Mypage;

const MypageWrapper = styled.div`
  width: 985px;
  margin: 0 auto;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 40px 50px 58px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e1e1e1;

  overflow: auto;
`;

const UserIcon = styled.div`
  width: 135px;
  text-align: center;
`;

const SubUserIcon = styled.div`
  padding: 13px 5px 5px 5px;
  background-color: #d0d0d0;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const IconImage = styled.img`
  width: 100px;
  aspect-ratio: 1;
  object-fit: fill;
`;

const IconUserImage = styled.img`
  width: 150px;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: fill;
`;

const UserInfo = styled.div`
  width: 719px;
`;

const UserDescription = styled.div`
  margin-bottom: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;
  vertical-align: baseline;
`;

const UserNickName = styled.span`
  display: inline-block;
  margin-right: 8px;
  color: #342929;
  font-size: 29px;
  font-weight: 500;

  line-height: 32px;
`;

const UserEmail = styled.span`
  display: inline-block;
  margin-right: 8px;
  color: #342929;
  font-size: 13px;
  font-weight: 500;
`;

const ChangeNickName = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${pencilImage});
  background-color: #f8f8f8;
  border: none;
`;

const CustomerStatus = styled.p`
  margin-bottom: 4px;
  color: #342929;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
`;

const CustomerLevel = styled.span`
  color: purple;
  text-decoration: underline;
`;

const UserContentsWrapper = styled.div`
  display: flex;
  width: 980px;
  margin-top: 25px;
  padding-top: 25px;
`;

const SideBar = styled.div`
  width: 165px;
`;

const MyDgvHome = styled.li`
  width: 155px;
  height: 34px;
  padding-left: 10px;
  background-color: ${({ stat, theme }) =>
    stat === '/mypage' ? theme.style.logoColor : 'white'};

  &:hover {
    background-color: ${({ theme }) => theme.style.logoColor};
  }

  &:hover a {
    color: white;
  }
`;
const MyDgvHomeLink = styled(Link)`
  color: ${({ stat }) => (stat === '/mypage' ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  line-height: 34px;

  &:hover {
    color: white;
  }
`;

const GoToReservedPage = styled.li`
  width: 155px;
  height: 34px;
  padding-left: 10px;
  background-color: ${({ stat, theme }) =>
    stat === '/mypage/bookedlist' ? theme.style.logoColor : 'white'};

  &:hover {
    background-color: ${({ theme }) => theme.style.logoColor};
  }

  &:hover a {
    color: white;
  }
`;

const GoToReservedPageLink = styled(Link)`
  height: 34px;
  color: ${({ stat }) => (stat === '/mypage/bookedlist' ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  line-height: 34px;

  &:hover {
    color: white;
  }
`;

const Contents = styled.div`
  margin-left: 20px;
  text-align: center;
`;
