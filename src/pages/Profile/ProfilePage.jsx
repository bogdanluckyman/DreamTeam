import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfile } from '../../redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile()); // Виконуємо запит для отримання данних з сервера
  }, [dispatch]);

  return <div>{/* <p>Profile Settings</p> */}</div>;
}
