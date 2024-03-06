import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
// import FirstPage from 'pages/FirstPage/FirstPage';
// import SecondPage from 'pages/SecondPage/SecondPage';
// import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="/first" element={<FirstPage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
