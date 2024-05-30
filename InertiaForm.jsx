//import { useForm } from "@inertiajs/inertia-react"
import { createContext, useContext, useEffect } from "react"
import { useForm } from "@inertiajs/react"

const FormContext = createContext(null)

export const InertiaForm = ({ initialValues, onSubmit, enableReInitialization = false, children }) => {
    const { data, setData, errors, reset, progress, processing } = useForm(initialValues)

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(data)
    }

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        enableReInitialization && setData(initialValues)
    }, [initialValues])
    
    
    return (
        <FormContext.Provider
        value={{ data, setData, errors, handleSubmit, handleChange }}
        >
            {children({ data: data, setData: setData, errors: errors, handleSubmit: handleSubmit, handleChange: handleChange, reset: reset, progress: progress , processing: processing })}
        </FormContext.Provider>
    )
}

export const Form = ({ children }) => {
    const { handleSubmit } = useInertiaForm()
    
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>

    )
}

export function useInertiaForm() {
    return useContext(FormContext)
}


export const LabeledDropdown = ({list = [], name = '', errorClassName = '', labelClassName = '', label = '', selectClassName = '', onChange }) => {

    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <select name={name} value={data[name]} className={selectClassName} onChange={(e) => onChange ? onChange(e.target.value) : setData({ ...data, [name]: e.target.value })}>
                {list.map((name, index) => (
                    <option value={name} key={index}>{name}</option>
                ))}
            </select>
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}

export const LabelField = ({disabled,  name = '', type = '', errorClassName = '', labelClassName = '', label = '', fieldClassName = '', placeHolder, onChange }, props) => {
    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <input disabled={disabled} placeholder={placeHolder} type={type} name={name} value={data[name]} className={fieldClassName} onChange={(e) => onChange ? onChange(e) : setData({ ...data, [name]: e.target.value })} {...props} />
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}

export const LabelTextArea = ({ name = '', rows = 4, cols = 50,   errorClassName = '', labelClassName = '', label = '', textareaClassName = '', placeHolder, onChange }, props) => {
    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <textarea name={name} className={textareaClassName} rows={rows} cols={cols} placeholder={placeHolder} onChange={(e)=> onChange ? onChange(e): setData({...data, [name]: e.target.value})} {...props}>
            </textarea>
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}


