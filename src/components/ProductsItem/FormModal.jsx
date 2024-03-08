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

import { useState } from 'react';
import WellDoneModal from './WellDoneModal';
import { useDispatch } from 'react-redux';
import { addCalories } from '../../redux/diary/operation';

const FormModal = ({ onClose, product, date }) => {
  // const [productsInformation, setProductInformation] = useState({});
  const [showWellDoneModal, setShowWellDoneModal] = useState(false);
  const [getFormModal, setFormModal] = useState(true);
  const [getCalories, setCalories] = useState(0);
  const dispatch = useDispatch();
  const id = product._id.$oid;
  const productTitel = product.title;
  const productCalori = product.calories;

  // console.log(id);
  // console.log(productTitel);
  // console.log(date);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      onClose();
    }
  });

  // useEffect(() => {
  //   console.log('Calories changed:', getCalories);
  // }, [getCalories]);

  const ValidationSchema = Yup.object().shape({
    // product: Yup.string(),
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
    console.log(values);
    const value = values.amount;
    try {
      await ValidationSchema.validate(values, { abortEarly: false });

      const newObjekt = {
        date: date,
        products: {
          productID: id,
          amount: value,
          calories: getCalories,
        },
      };

      console.log(newObjekt);

      dispatch(addCalories(newObjekt));
      setShowWellDoneModal(true);
      setFormModal(false);
      resetForm();
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
          // product: '',
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
                    <use href="/src/img/symbol-defs.svg#icon-close-white"></use>
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
