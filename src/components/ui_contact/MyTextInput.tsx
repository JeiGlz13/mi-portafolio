import { ErrorMessage, useField } from "formik";

interface InputPropsInterface {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ({label, ...props}: InputPropsInterface) => {
    const [field] = useField(props);
  return (
    <>
        <label className= 'form-label'> {label} </label>
        <input placeholder = {props.placeholder}
        className= 'form-input'
        maxLength={100}
        {...field} {...props} />
        <ErrorMessage name={props.name} component = 'span' className='form-error' />
    </>
  )
}
