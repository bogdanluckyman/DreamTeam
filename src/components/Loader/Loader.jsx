import { LoaderCont } from './Loader.styled';
import { Heart } from 'react-spinners-css';

export const Loader = ({ isLoading }) => {
  return <LoaderCont>{isLoading && <Heart color={'#e6533c'} />}</LoaderCont>;
}