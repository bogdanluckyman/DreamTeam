import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/products/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Виконуємо запит для отримання данних з сервера
  }, [dispatch]);

  return <div>{/* <p>Profile Settings</p> */}</div>;
}
