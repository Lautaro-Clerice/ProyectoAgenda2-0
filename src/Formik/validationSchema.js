import * as Yup from 'yup';
export const validationschema = Yup.object({
  nombre: Yup.string()
    .trim()
    .max(30, 'El nombre debe ser menor a 30 caracteres')
    .required('Este campo es obligatorio'),
    email: Yup.string()
    .email('Debes ingresar un Mail valido')
    .required('Este campo es obligatorio'),
    telefono:Yup.string().trim().min(10, 'Debe contener 10 numeros').required('Este campo es obligatorio'),
    
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required('Campo Requerido'),
  password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});

export const codeValidationSchema = Yup.object({
  code: Yup.string()
  .required('Este campo es obligatorio')
  .min(5, 'Minimo 5 caracteres'),
  email: Yup.string()
  .email('Debes ingresar un Mail valido')
  .required('Este campo es obligatorio'),
});
