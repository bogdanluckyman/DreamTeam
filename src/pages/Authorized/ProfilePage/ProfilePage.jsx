import { TitlePage } from '../../../components/TitlePage/TitlePage';
import UserCard from '../../../components/UserCard/UserCard';
import UserForm from '../../../components/UserForm/UserForm';
import { Container, WrapperContent, WrapperForm } from './ProfilePage.styled';

const ProfilePage = () => {
  return (
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
