// import styled from 'styled-components';







// export const FormContainer = styled.div`
// margin-top: 20px;
// @media screen and (min-width: 768px) {
//   // display: flex;
//   align-items: flex-end;
//   justify-content: space-between;
//   margin-top: 40px;
//   width: 100%;
//   gap: 14px;
// }
// @media screen and (min-width: 1440px) {
//   display: block;
// }
// `;
 
// export const SectionTitle = styled.p`
//   color: var(--light-grey-color);
//   margin-bottom: 4px;
//   font-size: 12px;
//   @media screen and (min-width: 768px) {
//     font-size: 14px;
//   }
// `;


// export const WrappContainer = styled.div`
// // margin-top: 20px;
// // @media screen and (min-width: 768px) {
// //   display: flex;
// //   align-items: flex-end;
// //   justify-content: space-between;
// //   margin-top: 40px;
// //   width: 100%;
// //   gap: 14px;
// // }
// `;


// export const TopWrapper = styled.div`
// position: relative;
//     margin-bottom: 14px;
//     width: 100%;

//     // &.error input {
//     //   border: $border-error;
//     // }
//     // &.success input {
//     //   border: $border-success;
//     // }
//     @media screen and (min-width: 768px) {
//       width: 50%;
//     }
   
//   }

// `;

























// export const WrappInput = styled.div`
//   position: relative;
//   margin-top: 40px;
//   width: 160px;
  
//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     display: flex;
//     gap: 28px;
//   }
  

//   label {
//     position: absolute;
//     font-size: 14px;
//     top: 50%;
//     // left: 14px;
    
//     transform: translateY(-50%);
//     pointer-events: none;
//     transition:
//       top 0.2s,
//       left 0.2s,
//       transform 0.2s;
//     color: var(--grey-color);
//   }

//   input[type='number']:focus + label,
//   input[type='number']:not(:placeholder-shown) + label {
//     color: var(--grey-color);
//     transform: translateY(-44px);
//   }
// `;

// export const Input = styled.input`
// // position: relative;
//   width: 100%;
//   max-width: 335px;
//   padding: 14px;
//  margin-top: 4px;
//   // margin-bottom: 36px;
//   align-items: center;
//   gap: 10px;
//   border-radius: 12px;
//   border: 1px solid rgba(239, 237, 232, 0.3);
//   background-color: transparent;
//   color: #efede8;
//   font-size: 14;
  

//   @media screen and (min-width: 768px){
//     margin-bottom: 8px;

//   }
// `;

// export const WrapperInputField = styled.div`
// display: flex;

//   flex-wrap: wrap;
// max-width: 345px;

  

//   align-items: flex-end;
//   justify-content: space-between;



// gap: 14px;
// @media screen and (min-width: 768px){
//   display: inline-flex;
//   align-items: flex-end;
//   margin-bottom: 14px;
//   width: 100%;
//   gap: 14px;
//   width: 100%;

// }

// `;

// export const Wrapper = styled.div`
// // margin-top: 20px;
 

// // @media screen and (min-width: 768px) {
// //   margin-top: 40px;
// //   // display: flex;
// //   // align-items: flex-end;
// //   // justify-content: space-between;
// //   width: 700px;
// // }

// @media screen and (min-width: 1440px) {
//   padding-right: 64px;
// }

// `;

// export const InputField = styled.input`
// margin-top: 4px;
// align-items: center;
// width: 100%;
// padding: 14px;
// gap: 10px;
// font-family: 'Roboto';
// line-height: 1.28;
//   align-items: center;
//   gap: 10px;
//   border-radius: 12px;
//   border: 1px solid rgba(239, 237, 232, 0.3);
//   background-color: transparent;
  
//   color: #efede8;
// `;

// export const Label = styled.label`
// position: relative;
// top: 50%;
//   color: var(--light-grey-color);
//   font-family: Roboto;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
// `;

// export const WrapperRadio = styled.div`
//   margin-top: 30px;
//   // display: flex;
//   flex-wrap: wrap;
  

//   @media screen and (min-width: 1440px) {
//     display: block;
//   }

//   .radio {
//     position: relative;
//   }

//   .radio-input {
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     margin: -1px;
//     border: 0;
//     padding: 0;
//     white-space: nowrap;
//     clip-path: inset(100%);
//     clip: rect(0 0 0 0);
//     overflow: hidden;
//   }

//   .radio-label {
//     padding-left: 25px;
//     cursor: pointer;
//     font-family: 'RobotoRegular';
//     font-size: 14px;
//     line-height: 1.71em;
//     letter-spacing: -0.28px;
//     color: #efede8;
//     margin-right: 9px;

//     @media screen and (min-width: 768px) and (max-width: 1439px) {
//       font-size: 16px;
//       line-height: 24px;
//     }
//   }

//   .radio-label::before {
//     content: '';
//     display: block;
//     width: 18px;
//     height: 18px;
//     border: 2px solid var(--grey-color);
//     background-color: transparent;
//     border-radius: 50%;
//     position: absolute;
//     top: 3px;
//     left: 0;
//   }

//   .radio-label::after {
//     content: '';
//     display: block;
//     width: 10px;
//     height: 10px;
//     border: 2px solid var(--orange-light-color);
//     background-color: var(--orange-light-color);
//     border-radius: 50%;
//     opacity: 0;
//     position: absolute;
//     top: 7px;
//     left: 4px;
//     z-index: 2;
//   }

//   .radio-input:checked + .radio-label::before {
//     border-color: var(--orange-light-color);
//   }

//   .radio-input:checked + .radio-label::after {
//     opacity: 1;
//   }
// `;

// export const Button = styled.button`
//   margin: 40px 0px 80px 0px;
//   padding: 12px 40px;
//   border-radius: 12px;
//   border-color:  var(--orange-color);
//   background: var(--orange-color);
//   color: rgba(239, 237, 232, 0.6);

//   @media screen and (min-width: 768px) {
//     margin: 40px 0px 64px 0;
//     padding: 16px 50px;
//   }
// `;

// export const WrapperLevel = styled.div`
// width: 320px;
//   margin-top: 40px;

//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }
// `;





// import { Formik, Field, Form } from 'formik';

// import Button from 'components/Buttons/Button';
// import RadioButton from './RadioButton.jsx/RadioButton';
// import ErrorMessages from './ErrorMessages/ErrorMessages';

// import {
//   bloodOptions,
//   sexOptions,
//   levelOptions,
// } from './RadioButton.jsx/radioOptions';

// import userFormSchema from 'schema/userFormSchema';

// import styles from './UserForm.module.scss';

// const UserForm = () => {
//   const initialValues = {
//     name: '',
//     email: 'user@example.com',
//     height: '',
//     currentWeight: '',
//     desiredWeight: '',
//     birthday: '',
//     blood: '',
//     sex: '',
//     levelActivity: '',
//   };
//   return (
//     <div className={styles.form__container}>
//       <Formik initialValues={initialValues} validationSchema={userFormSchema}>
//         {formik => (
//           <Form>
//             {/* Top Field Input */}
//             <div className={styles.form__topFieldContainer}>
//               <div
//                 className={`${styles.form__topFieldWrapper} ${
//                   formik.touched.name && formik.errors.name
//                     ? `${styles.error}`
//                     : formik.touched.name && !formik.errors.name
//                     ? `${styles.success}`
//                     : ''
//                 }`}
//               >
//                 <label className={styles.form__labelInput} htmlFor="name">
//                   Name
//                 </label>
//                 <Field
//                   className={styles.form__input}
//                   name="name"
//                   type="text"
//                   id="name"
//                   placeholder="Your name"
//                 />
//                 <ErrorMessages nameField="name" />
//               </div>
//               <div className={styles.form__topFieldWrapper}>
//                 <label className={styles.form__labelInput} htmlFor="email">
//                   Email
//                 </label>
//                 <Field
//                   className={`${styles.form__input} ${styles.form__inputEmail}`}
//                   type="text"
//                   name="email"
//                   id="email"
//                   readOnly
//                   disabled
//                 />
//               </div>
//             </div>

//             {/* Inputs - height, weight, birthday */}
//             <div className={styles.input__container}>
//               <div className={styles.input__wrapper}>
//                 <div
//                   className={`${styles.input__fieldContainer} ${
//                     formik.touched.height && formik.errors.height
//                       ? `${styles.error}`
//                       : formik.touched.height && !formik.errors.height
//                       ? `${styles.success}`
//                       : ''
//                   }`}
//                 >
//                   <label className={styles.form__labelInput} htmlFor="height">
//                     Height
//                   </label>
//                   <Field
//                     className={styles.input__field}
//                     type="number"
//                     name="height"
//                     id="height"
//                     placeholder=""
//                   />
//                   <ErrorMessages nameField="height" />
//                 </div>
//                 <div
//                   className={`${styles.input__fieldContainer} ${
//                     formik.touched.currentWeight && formik.errors.currentWeight
//                       ? `${styles.error}`
//                       : formik.touched.currentWeight &&
//                         !formik.errors.currentWeight
//                       ? `${styles.success}`
//                       : ''
//                   }`}
//                 >
//                   <label
//                     className={styles.form__labelInput}
//                     htmlFor="currentWeight"
//                   >
//                     CurrentWeight
//                   </label>
//                   <Field
//                     className={styles.input__field}
//                     type="number"
//                     name="currentWeight"
//                     id="currentWeight"
//                     placeholder=""
//                   />
//                   <ErrorMessages nameField="currentWeight" />
//                 </div>
//               </div>

//               <div className={styles.input__wrapper}>
//                 <div
//                   className={`${styles.input__fieldContainer} ${
//                     formik.touched.desiredWeight && formik.errors.desiredWeight
//                       ? `${styles.error}`
//                       : formik.touched.desiredWeight &&
//                         !formik.errors.desiredWeight
//                       ? `${styles.success}`
//                       : ''
//                   }`}
//                 >
//                   <label
//                     className={styles.form__labelInput}
//                     htmlFor="desiredWeight"
//                   >
//                     DesiredWeight
//                   </label>
//                   <Field
//                     className={styles.input__field}
//                     type="number"
//                     name="desiredWeight"
//                     id="desiredWeight"
//                     placeholder=""
//                   />
//                   <ErrorMessages nameField="desiredWeight" />
//                 </div>
//                 <div
//                   className={`${styles.input__fieldContainer} ${
//                     formik.touched.birthday && formik.errors.birthday
//                       ? `${styles.error}`
//                       : formik.touched.birthday && !formik.errors.birthday
//                       ? `${styles.success}`
//                       : ''
//                   }`}
//                 >
//                   <label className={styles.form__labelInput} htmlFor="birthday">
//                     Birthday
//                   </label>
//                   <Field
//                     className={styles.input__field}
//                     type="date"
//                     name="birthday"
//                     id="birthday"
//                     placeholder=""
//                   />
//                   <ErrorMessages nameField="birthday" />
//                 </div>
//               </div>
//             </div>

//             {/* Radio inputs */}
//             <p className={styles.titleBlood}>Blood</p>
//             <div className={styles.radio__wrapper}>
//               <div className={styles.radio__container}>
//                 {/* Radio blood inputs */}
//                 <div className={styles.radio__bloodContainer}>
//                   {bloodOptions.map(option => (
//                     <RadioButton
//                       key={option.id}
//                       id={option.id}
//                       name="blood"
//                       value={option.value}
//                       label={option.label}
//                       checked={formik.values.blood === option.value}
//                       onChange={() =>
//                         formik.setFieldValue('blood', option.value)
//                       }
//                     />
//                   ))}
//                 </div>
//                 {/* Radio sex inputs */}
//                 <div className={styles.radio__sexContainer}>
//                   {sexOptions.map(option => (
//                     <RadioButton
//                       key={option.id}
//                       id={option.id}
//                       name="sex"
//                       value={option.value}
//                       label={option.label}
//                       checked={formik.values.sex === option.value}
//                       onChange={() => formik.setFieldValue('sex', option.value)}
//                     />
//                   ))}
//                 </div>
//               </div>
//               {/* {level Actively} */}
//               <div className={styles.radio__levelActivityContainer}>
//                 {levelOptions.map(option => (
//                   <RadioButton
//                     key={option.id}
//                     id={option.id}
//                     name="levelActivity"
//                     value={option.value}
//                     label={option.label}
//                     checked={formik.values.levelActivity === option.value}
//                     onChange={() =>
//                       formik.setFieldValue('levelActivity', option.value)
//                     }
//                   />
//                 ))}
//               </div>
//             </div>
//             <Button className={styles.btn_save} type="submit" text="Save" />
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default UserForm;