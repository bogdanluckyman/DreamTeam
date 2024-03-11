import { LoaderCont } from './Loader.styled';
import { Heart } from 'react-spinners-css';

export const Loader = () => {
  return <LoaderCont>{<Heart color={'#e6533c'} />}</LoaderCont>;
};
