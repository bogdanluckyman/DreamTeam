// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { selectUser } from '../../redux/auth/selectors';

import sprite from '../../img/symbol-defs.svg';
import Logout from '../Logout/Logout';

import { useState } from 'react';
import {
  Button,
  Avatar,
  Photo,
  Wrapper,
  IconBtn,
  SvgLogoUser,
  TitleName,
  Subtitle,
  WrapperDiv,
  WrapperLogOut,
} from './UserCard.styled';
import DailyRate from '../DailyRate/DailyRate';
import WarningMessage from '../WarningMessage/WarningMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { updateAvatar } from '../../redux/auth/operation';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // console.log(user)

  const [avatar, setAvatar] = useState(user.avatarURL);

  const avatarUser = <Photo src={avatar} width="100%" alt="Avatar" />;
  const avatarLogo = (
    <SvgLogoUser fill="var(--light-grey-color)" width="68" height="68">
      <use href={`${sprite}#icon-big-user`}></use>
    </SvgLogoUser>
  );

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      setAvatar(objectURL);
    }

    try {
      dispatch(updateAvatar(file));
      // console.log(file);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Wrapper>
      <Avatar>{avatar ? avatarUser : avatarLogo}</Avatar>
      <form id="upload-form">
        <input
          type="file"
          id="file-input"
          name="file"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />
        <label htmlFor="file-input">
          <Button>
            <IconBtn>
              <use href={`${sprite}#icon-plus`}></use>
            </IconBtn>
          </Button>
        </label>
      </form>
      <TitleName>{user.name}</TitleName>
      <Subtitle>User</Subtitle>
      <WrapperDiv>
        <DailyRate
          color="var(--orange-color)"
          iconId="icon-fork"
          text="Daily calorie intake"
          value={user.bmr}
        />
        <DailyRate
          color="var(--orange-color)"
          iconId="icon-dumbbell"
          text="Daily physical activity"
          value={user.dailyActivity}
        />
      </WrapperDiv>
      <WarningMessage />
      <WrapperLogOut>
        <Logout />
      </WrapperLogOut>
    </Wrapper>
  );
};

export default UserCard;
