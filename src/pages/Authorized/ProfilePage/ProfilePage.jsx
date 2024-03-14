
import { useSelector } from 'react-redux';
import { TitlePage } from '../../../components/TitlePage/TitlePage';
import UserCard from '../../../components/UserCard/UserCard';
import UserForm from '../../../components/UserForm/UserForm';

import { Container, WrapperContent, WrapperForm } from './ProfilePage.styled';
import { selectIsRefreshing} from '../../../redux/auth/selectors';
import { Loader } from '../../../components/Loader/Loader';


const ProfilePage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  
  


  return isRefreshing ? (<Loader/>) : (
    <Container>
      <TitlePage title="Profile Settings" />
      <WrapperContent>
        <div>
          <UserCard />
        </div>
        <WrapperForm>
          <UserForm />
        </WrapperForm>
      </WrapperContent>
    </Container>
  );
};

export default ProfilePage;
