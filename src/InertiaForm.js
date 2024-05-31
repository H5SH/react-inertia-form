import React, { createContext, useContext, useEffect } from "react"
import { useForm } from "@inertiajs/react"

const FormContext = createContext(null)


const InertiaForm = ({ initialValues, onSubmit, enableReInitialization = false, children }) => {
    const form = useForm(initialValues)

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(form.data)
    }

    function handleChange(e) {
        form.setData({
            ...form.data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        enableReInitialization && form.setData(initialValues)
    }, [initialValues])
    
    
    return (
        <FormContext.Provider
        value={{ ...form, handleSubmit, handleChange }}
        >
            {children({...form, handleSubmit: handleSubmit, handleChange: handleChange })}
        </FormContext.Provider>
    )
}

const Form = ({ children }) => {
    const { handleSubmit } = useInertiaForm()
    
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>

    )
}

function useInertiaForm() {
    return useContext(FormContext)
}


const LabeledDropdown = ({ formateLabel, list = [], name = '', errorClassName = 'text-danger', labelClassName = 'form-label', label = '', selectClassName = 'form-select', onChange }) => {

    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <select name={name} value={formateLabel ? JSON.stringify(data[name]):data[name]} className={selectClassName} onChange={(e) => onChange ? onChange(formateLabel ? JSON.parse(e.target.value): e.target.value) : setData({ ...data, [name]: e.target.value })}>
                {list.map((name, index) => (
                    <option value={typeof name === 'string' ? name: JSON.stringify(name)} key={index}>
                        {formateLabel ? formateLabel(name):name}
                    </option>
                ))}
            </select>
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}

const LabelField = ({disabled,  name = '', type = '', errorClassName = '', labelClassName = '', label = '', fieldClassName = '', placeHolder, onChange }, props) => {
    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <input disabled={disabled} placeholder={placeHolder} type={type} name={name} value={data[name]} className={fieldClassName} onChange={(e) => onChange ? onChange(e) : setData({ ...data, [name]: e.target.value })} {...props} />
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}

const LabelTextArea = ({ name = '', rows = 4, cols = 50,   errorClassName = '', labelClassName = '', label = '', textareaClassName = '', placeHolder, onChange }, props) => {
    const { data, errors, setData } = useContext(FormContext)
    return (
        <>
            {label && <label className={labelClassName}>{label}</label>}
            <textarea value={data[name]} name={name} className={textareaClassName} rows={rows} cols={cols} placeholder={placeHolder} onChange={(e)=> onChange ? onChange(e): setData({...data, [name]: e.target.value})} {...props}>
            </textarea>
            {errors[name] && <div className={errorClassName}>{errors[name]}</div>}
        </>
    )
}

export {LabelField, LabelTextArea, LabeledDropdown, useInertiaForm, InertiaForm, Form}


