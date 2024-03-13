import { register } from '../../redux/auth/operation';
import { Button } from '../LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import {
  InputButtonCont,
  FormContainer,
  SignInText,
  SignInLink,
  ButtonIcon,
  Svg,
  GreenMsg,
  SvgGreen,
  ErrorMsg,
  SvgRed,
  Form,
  Input,
} from './RegisterForm.styled';

import sprite from '../../img/sprite.svg';

const RegValidateSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),

  email: Yup.string().email('Invalid email address').required('Required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no more than 16 characters')
    .matches(/^(?=.*[a-z])/, 'Please create a stronger password')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  const isFieldValid = (errors, fieldName) => !errors[fieldName];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegValidateSchema}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <FormContainer>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className={`${'defoult'}
                    ${touched.name && !errors.name && 'success'}
                    ${touched.name && errors.name && 'error'}`}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && isFieldValid(errors, 'name')}
            {touched.name && !errors.name ? (
              <GreenMsg>
                <SvgGreen>
                  <use href={`${sprite}#icon-checkbox-circle-fill`} />
                </SvgGreen>
                Name is secure
              </GreenMsg>
            ) : (
              <ErrorMsg>
                <ErrorMessage name="name">
                  {(errorMsg) => (
                    <div>
                      <SvgRed>
                        <use href={`${sprite}#icon-red`} />
                      </SvgRed>
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>
              </ErrorMsg>
            )}
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className={`${'defoult'}
                    ${touched.email && !errors.email && 'success'}
                    ${touched.email && errors.email && 'error'}`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.email && isFieldValid(errors, 'email')}
            {touched.email && !errors.email ? (
              <GreenMsg>
                <SvgGreen>
                  <use href={`${sprite}#icon-checkbox-circle-fill`} />
                </SvgGreen>
                Email is secure
              </GreenMsg>
            ) : (
              <ErrorMsg>
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div>
                      <SvgRed>
                        <use href={`${sprite}#icon-red`} />
                      </SvgRed>
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>
              </ErrorMsg>
            )}
            <InputButtonCont>
              <Input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className={`${'defoult'}
                    ${touched.password && !errors.password && 'success'}
                    ${touched.password && errors.password && 'error'}`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.password && !errors.password ? (
                <GreenMsg>
                  <SvgGreen>
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </SvgGreen>
                  Password is secure
                </GreenMsg>
              ) : (
                <ErrorMsg>
                  <ErrorMessage name="password">
                    {(errorMsg) => (
                      <div>
                        <SvgRed>
                          <use href={`${sprite}#icon-red`} />
                        </SvgRed>
                        {errorMsg}
                      </div>
                    )}
                  </ErrorMessage>
                </ErrorMsg>
              )}
              {passwordVisible ? (
                <ButtonIcon
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                >
                  <Svg>
                    <use href={`${sprite}#icon-eye`} />
                  </Svg>
                </ButtonIcon>
              ) : (
                <ButtonIcon
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                >
                  <Svg>
                    <use href={`${sprite}#icon-eye-off`} />
                  </Svg>
                </ButtonIcon>
              )}
            </InputButtonCont>
          </FormContainer>
          <Button type="submit">Sign Up</Button>
          <SignInText>
            Already have an account?
            <SignInLink to="/signin"> Sign In</SignInLink>
          </SignInText>
        </Form>
      )}
    </Formik>
  );
};
