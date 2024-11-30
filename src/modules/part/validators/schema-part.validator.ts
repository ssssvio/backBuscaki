import * as yup from 'yup';

const partSchema = yup.object().shape({
  product: yup
    .mixed()
    .oneOf(
      [
        'Tela',
        'Tampa',
        'Bateria',
        'Carcaça',
        'Vibracall',
        'Flex Carga',
        'Flex botões',
        'Câmera Frontal',
        'Câmera traseira',
        'Alto-Falante Externo',
        'Alto-Falante Auricular',
      ],
      'O campo "product" deve ser um dos seguintes valores: Tela, Bateria, Flex Carga, Flex botões, Câmera Frontal, Câmera traseira, Tampa, Carcaça, Vibracall, Alto-Falante.'
    )
    .required('O campo "product" é obrigatório.'),
  model: yup.string().required('O campo "model" é obrigatório.'),
  brand: yup
    .mixed()
    .oneOf(
      ['Apple', 'Samsung', 'Motorola', 'Xiaomi','Realme', 'Asus', 'LG', 'Sony', 'Outros'],
      'O campo "brand" deve ser um dos seguintes valores: Apple, Samsung, Motorola, Xiaomi, Asus, LG, Sony, Outros.'
    )
  ,
  amount: yup
    .number()
    .typeError('O campo "amount" deve ser um número.')
    .required('O campo "amount" é obrigatório.'),
  quality: yup.string().required('O campo "quality" é obrigatório.'),
  color: yup.string().nullable(),
  value: yup
    .number()
    .min(20, 'O campo "value" deve ser maior que 20.')
    .typeError('O campo "value" deve ser um número.')
    .required('O campo "value" é obrigatório.'),
  passOnFee: yup
    .boolean()
    .typeError('O campo "passOnFee" deve ser um valor booleano.')
    .required('O campo "passOnFee" é obrigatório.'),
});

export default partSchema;
