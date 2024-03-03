// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { selectUser } from '../../redux/auth/selectors';

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
} from './UserCard.styled';
import DailyRate from '../DailyRate/DailyRate';
import WarningMessage from '../WarningMessage/WarningMessage';


const UserCard= () => {

//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
const user = {avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDKKGk27KAYuHEOcE4cjcWtTxCmTrDE79Zg&usqp=CAU",
name: 'Ang', }
  const [avatar, setAvatar] = useState(user.avatarURL);

  const avatarUser = <Photo src={avatar} width="100%" alt="Avatar" />;
  const avatarLogo = (
    <SvgLogoUser fill="var(--light-grey-color)" width="68" height="68">
      {/* <use href={`${sprite}#*назва іконки*`}></use> */}
    </SvgLogoUser>
  );

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      setAvatar(objectURL);
    }

    try {
    //   *діспатч апдейту аватара*
      console.log(file);
    } catch (error) {
      console.error('Помилка при відправленні файлу', error);
    }
  };

  return (
    <Wrapper>
      <Avatar>{ avatar ? avatarUser : avatarLogo}</Avatar>
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
              {/* <use href={`${sprite}#*назва іконки*`}></use> */}
            </IconBtn>
          </Button>
        </label>
      </form>
      <TitleName>{user.name}</TitleName>
      <Subtitle>User</Subtitle>
      <WrapperDiv>
              <DailyRate
                color="var(--orange-color)"
                iconId="*назва іконкии з виделкою*"
                text="Daily calorie intake"
                value="2200"
              />
              <DailyRate
                color="var(--orange-color)"
                iconId="*назва іконкии з гантелею*"
                text="Daily norm of sports"
                value="110 min"
              />
            </WrapperDiv>
            <WarningMessage />
    </Wrapper>
  );
};

export default UserCard;