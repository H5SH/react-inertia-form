import { createContext, useContext, useEffect } from "react"
import { useForm, usePage } from "@inertiajs/react"

const FormContext = createContext(null)

export const InertiaForm = ({ initialValues, onSubmit, enableReInitialization = false, children }) => {

    const form = useForm(initialValues)
    const { errors } = usePage().props

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

    // Children should be a function
    useEffect(() => {
        enableReInitialization && setData(initialValues)
    }, [initialValues])

    return (
        <FormContext.Provider
            value={{ ...form, errors, handleSubmit, handleChange }}
        >
            {children({ ...form, errors: errors, handleSubmit: handleSubmit, handleChange: handleChange })}
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


export const LabeledDropdown = ({ formateLabel, list = [], name = '', errorClassName = 'text-danger', labelClassName = 'form-label', label = '', selectClassName = 'form-select', onChange }) => {

    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <select name={name} value={formateLabel ? JSON.stringify(data[name]) : data[name]} className={selectClassName} onChange={(e) => {
                const value = formateLabel ? JSON.parse(e.target.value): e.target.value
                onChange ? onChange(value) : setData({ ...data, [name]: value })
            }}
            >
                {list.map((name, index) => (
                    <option value={typeof name === 'string' ? name : JSON.stringify(name)} key={index}>
                        {formateLabel ? formateLabel(name) : name}
                    </option>
                ))}
            </select>
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}

export const LabelField = ({ initialValue, disabled, name = '', type = 'text', errorClassName = 'text-danger', labelClassName = 'form-label', label = '', fieldclassName = 'form-control', placeHolder, onChange }, props) => {
    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <input disabled={disabled} placeholder={placeHolder} type={type} name={name} value={initialValue ? initialValue : data[name]} className={fieldclassName} onChange={(e) => onChange ? onChange(e.target.value) : setData({ ...data, [name]: e.target.value })} {...props} />
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}

export const LabelTextArea = ({ name = '', rows = 4, cols = 50, errorClassName = 'text-danger', labelClassName = 'form-label', label = '', textareaclassName = 'form-control', placeHolder, onChange }, props) => {
    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <textarea value={data[name] ? data[name] : ''} name={name} className={textareaclassName} rows={rows} cols={cols} placeholder={placeHolder} onChange={(e) => onChange ? onChange(type === 'checkbox' ? e : e.target.value) : setData({ ...data, [name]: e.target.value })} {...props}>
            </textarea>
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}