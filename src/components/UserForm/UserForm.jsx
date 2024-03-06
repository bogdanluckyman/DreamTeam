import { parseISO } from 'date-fns';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  WrapperInputField,
  InputField,
  Button,
  WrapperRadio,
  WrapperLevel,
  WrappInput,
  Input,
  Wrapper,
  InfoContainer,
  LabelSpan,
} from './UserForm.styled';
import RadioBtn from '../RadioBtn/RadioBtn';
import Datapicker from '../Datapicker/Datapicker';

 import { selectUser } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo} from '../../redux/auth/operation';


const UserForm = () => {
  // тут буде редакс
   const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // *статичний юзер*
  // const user = {
  //   name: 'Ang',
  //   email: 'data@gmail.com',
  //   height: 165,
  //   currentWeight: 60,
  //   desiredWeight: 55,
  //   birthday: '1997-01-01',
  //   blood: 2,
  //   sex: 'female',
  //   levelActivity: 2,
  // };

  const bloodOptions = [
    { id: '1', value: '1', label: '1' },
    { id: '2', value: '2', label: '2' },
    { id: '3', value: '3', label: '3' },
    { id: '4', value: '4', label: '4' },
  ];

  const sexOptions = [
    { id: 'Male', value: 'male', label: 'Male' },
    { id: 'Female', value: 'female', label: 'Female' },
  ];

  const levelOptions = [
    {
      id: 'level-1',
      value: '1',
      label: 'Sedentary lifestyle (little or no physical activity)',
    },
    {
      id: 'level-2',
      value: '2',
      label: 'Light activity (light exercises/sports 1-3 days per week)',
    },
    {
      id: 'level-3',
      value: '3',
      label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    },
    {
      id: 'level-4',
      value: '4',
      label: 'Very active (intense exercises/sports 6-7 days per week)',
    },
    {
      id: 'level-5',
      value: '5',
      label:
        'Extremely active (very strenuous exercises/sports and physical work)',
    },
  ];

  const formattedDate = parseISO(user.birthday);
  console.log(formattedDate);

  const initialValues = {
    name: user.name || 'Name',
    height: user.height || '150',
    currentWeight: user.currentWeight || '35',
    desiredWeight: user.desiredWeight || '35',
    birthday: formattedDate || '2006-01-01',
    blood: (user.blood ?? '1').toString() || '1',
    sex: user.sex || 'male',
    levelActivity: (user.levelActivity ?? '1').toString() || '1',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    height: Yup.number()
      .positive('Height must be positive')
      .required('Height is required'),
    currentWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Current weight is required'),
    desiredWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Desired weight is required'),
    birthday: Yup.date().required('Birthday is required'),
  });

  const handleSubmit = (values) => {
    const UserData = {
      ...values,
    };
    console.log(UserData);
    // *тут буде діспатч апдейт параметрів юзера*
    dispatch(updateUserInfo(UserData));
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
           
           <FormContainer>
            <WrappInput>
              <Field
                name="name"
                type="text"
                id="name"
                placeholder="Your name"
                as={Input}
              />
              <label htmlFor="name">Name</label>
            </WrappInput>
            <WrappInput>
              <Input
                type="text"
                name="email"
                id="email"
                defaultValue={user.email}
                style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                readOnly
                disabled
              />
              <label htmlFor="email">Email</label>
            </WrappInput>
          </FormContainer>


<InfoContainer>
          <WrapperInputField>
            <WrappInput>
              <Field
                type="number"
                name="height"
                id="height"
                placeholder=""
                as={InputField}
              />
              <label htmlFor="height">Height</label>
            </WrappInput>
           
              <WrappInput>
                <Field
                  type="number"
                  name="currentWeight"
                  id="currentWeight"
                  placeholder=""
                  as={InputField}
                />
                <label htmlFor="currentWeight">Current Weight</label>
              </WrappInput>
          
          </WrapperInputField>
          <WrapperInputField>
            <WrappInput>
              <Field
                type="number"
                name="desiredWeight"
                id="desiredWeight"
                placeholder=""
                as={InputField}
              />
              <label htmlFor="desiredWeight">Desired Weight</label>
            </WrappInput>
            
            <WrappInput>
            <LabelSpan>Date of birth</LabelSpan>
            <Datapicker
            
            selectedDate={formik.values.birthday}
            setSelectedDate={date => {
              const formattedDate = parseISO(date.toISOString());
              formik.setFieldValue('birthday', formattedDate);
            }}
          />
          
          </WrappInput>
          </WrapperInputField>
          </InfoContainer>

              <WrapperRadio>
                <div style={{ display: 'flex', marginRight: '20px' }}>
                  <div style={{ display: 'flex', marginRight: '20px' }}>
                    {bloodOptions.map((option) => (
                      <RadioBtn
                        key={option.id}
                        id={option.id}
                        name="blood"
                        value={option.value}
                        checked={formik.values.blood === option.value}
                        label={option.label}
                        onChange={() =>
                          formik.setFieldValue('blood', option.value)
                        }
                      />
                    ))}
                  </div>

                  <div style={{ display: 'flex' }}>
                    {sexOptions.map((option) => (
                      <RadioBtn
                        key={option.id}
                        id={option.id}
                        name="sex"
                        value={option.value}
                        checked={formik.values.sex === option.value}
                        label={option.label}
                        onChange={() =>
                          formik.setFieldValue('sex', option.value)
                        }
                      />
                    ))}
                  </div>
                </div>

                <WrapperLevel>
                  {levelOptions.map((option) => (
                    <RadioBtn
                      key={option.id}
                      id={option.id}
                      name="levelActivity"
                      value={option.value}
                      checked={formik.values.levelActivity === option.value}
                      label={option.label}
                      onChange={() =>
                        formik.setFieldValue('levelActivity', option.value)
                      }
                    />
                  ))}
                </WrapperLevel>
              </WrapperRadio>

              <Button type="submit">Save</Button>
            
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default UserForm;
