import { SignIn, SignupOrange } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <SignupOrange to="/signup">Sign Up</SignupOrange>
      <SignIn to="/signin">Sign In</SignIn>
    </div>
  );
};
