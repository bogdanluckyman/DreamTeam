import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/auth/operation';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import sprite from '../../img/sprite.svg';

import {
  FormContainer,
  InputButtonCont,
  Form,
  Input,
  Button,
} from './LoginForm.styled';

import {
  SignInText,
  SignInLink,
  ButtonIcon,
  Svg,
  ErrorMsg,
  SvgRed,
  GreenMsg,
  SvgGreen,
} from '../RegisterForm/RegisterForm.styled';

const LogValidateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no more than 16 characters')
    .matches(/^(?=.*[a-z])/, 'Bad password format')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  const isFieldValid = (errors, fieldName) => !errors[fieldName];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LogValidateSchema}
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
          <Button type="submit">Sign In</Button>
          <SignInText>
            Don’t have an account?
            <SignInLink to="/signup"> Sign Up</SignInLink>
          </SignInText>
        </Form>
      )}
    </Formik>
  );
};
