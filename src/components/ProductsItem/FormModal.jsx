import { Field, Formik } from 'formik';
import {
  FormModalContainer,
  FormModalBackground,
  FormaInput,
  Inputs,
  Paragraph,
  Span,
  CloseModal,
  InnerContainer,
  Buttons,
  Button,
  FormaInputGramm,
  Label,
  SvgFormModal,
} from './FormModal.styles';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useState } from 'react';
import WellDoneModal from './WellDoneModal';
import { useDispatch, useSelector } from 'react-redux';
import { addDiaryProduct } from '../../redux/diary/operation';

const FormModal = ({ onClose, product }) => {
  const [showWellDoneModal, setShowWellDoneModal] = useState(false);
  const [getFormModal, setFormModal] = useState(true);
  const [getCalories, setCalories] = useState(0);
  const dispatch = useDispatch();
  const errorValue = useSelector((state) => state.diary.error);

  const id = product._id;
  const productTitel = product.title;
  const productCalori = product.calories;

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      onClose();
    }
  });

  const ValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .min(1, 'Amount must be at least 1')
      .required('Amount is required'),
  });

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setShowWellDoneModal(false);
      setFormModal(false);
      onClose();
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value.trim();
    if (!isNaN(value) && value !== '') {
      const amount = parseFloat(event.target.value);
      const productCalories = parseFloat(productCalori);
      const calculatedCalories = (amount * productCalories) / 100;
      return setCalories(calculatedCalories.toFixed(2));
    }
    return;
  };

  const handleSubmit = async (values, { resetForm }) => {
    function getFormattedDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      return `${day}-${month}-${year}`;
    }

    const formattedDate = getFormattedDate();

    const value = values.amount;
    try {
      await ValidationSchema.validate(values, { abortEarly: false });

      const newObjekt = {
        date: formattedDate,
        products: {
          productID: id,
          amount: value,
          calories: getCalories,
        },
      };

      const res = await dispatch(addDiaryProduct(newObjekt));

      if (errorValue !== null) {
        Notiflix.Notify.failure('Sorry, something went wrong. Try again');
        return;
      }
      if (res.meta.requestStatus === 'fulfilled') {
        Notiflix.Notify.success('Data added successfully');
        setShowWellDoneModal(true);
        setFormModal(false);
        resetForm();
      }
    } catch (error) {
      console.error('Message:', error.errors[0]);
    }
  };
  const toFormModal = () => {
    setShowWellDoneModal(false);
    setFormModal(true);
  };

  return (
    <>
      <Formik
        initialValues={{
          amount: '',
        }}
        onSubmit={handleSubmit}
      >
        <>
          {getFormModal && (
            <FormModalBackground onClick={handleBackgroundClick}>
              <FormModalContainer>
                <CloseModal onClick={onClose}>
                  <SvgFormModal width="13" height="13">
                    <use href="/DreamTeam/src/img/symbol-defs.svg#icon-close-white"></use>
                  </SvgFormModal>
                </CloseModal>

                <InnerContainer>
                  <Inputs>
                    <FormaInput
                      id="product"
                      name="product"
                      placeholder={productTitel}
                      readOnly={true}
                    />
                    <Label>grams</Label>
                    <Field
                      as={FormaInputGramm}
                      id="amount"
                      name="amount"
                      type="number"
                      onBlur={handleAmountChange}
                    />
                  </Inputs>

                  <Paragraph>
                    Calories: <Span>{getCalories}</Span>
                  </Paragraph>
                  <Buttons>
                    <Button type="submit">Add to diary</Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </Buttons>
                </InnerContainer>
              </FormModalContainer>
            </FormModalBackground>
          )}
          {showWellDoneModal && (
            <WellDoneModal
              Calories={getCalories}
              onClose={onClose}
              toFormModal={toFormModal}
              Background={handleBackgroundClick}
            />
          )}
        </>
      </Formik>
    </>
  );
};

export default FormModal;
