
import Logout from "../../components/Logout/Logout";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import UserCard from "../../components/UserCard/UserCard";
import UserForm from "../../components/UserForm/UserForm";
import { Container,  WrapperContent, WrapperForm } from "./ProfilePage.styled";

//   import { useSelector } from 'react-redux';

  
const ProfilePage = () => {

  // тут буде редакс
    // const user = useSelector(*селектор юзеру*);
  
    return (
      <Container>
       <TitlePage title="Profile Settings" />
        <WrapperContent>
          <div>
            <UserCard />
            <Logout />
          </div>
          <WrapperForm>
            <UserForm />
          </WrapperForm>
        </WrapperContent>
      </Container>
    );
  };

   export default ProfilePage;