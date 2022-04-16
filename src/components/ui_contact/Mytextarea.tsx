import { ErrorMessage, useField } from "formik";

interface InputPropsInterface {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}

export const MyTextarea = ({label, ...props}: InputPropsInterface) => {
    const [field] = useField(props);
  return (
    <>
        <label className= 'form-label'> {label} </label>
        <textarea placeholder = {props.placeholder} className = 'form-textarea'
        maxLength={500}
        {...field} {...props} />
        <ErrorMessage name={props.name} component = 'span' className='form-error' />
    </>
  )
}
