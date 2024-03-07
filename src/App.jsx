import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from './pages/FirstPage/FirstPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
// import { selectIsLoggedIn } from './redux/auth/selectors';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  // const { isLoggedIn } = selectIsLoggedIn;
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<FirstPage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
