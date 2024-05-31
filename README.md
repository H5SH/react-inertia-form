# inertiajs-react-form

> Inertia form component identical to formik but uses inertia useForm in the background

[![NPM](https://img.shields.io/npm/v/inertiajs-react-form.svg)](https://www.npmjs.com/package/inertiajs-react-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save inertiajs-react-form
```

## Parent dependencies

- react
- @inertiajs/react

## Usage

```jsx
import { InertiaForm, LabelField, Form } from 'inertiajs-react-form';

function App() {

  return (
    <div className="App">
      <InertiaForm
      onSubmit={(data) => console.log(data)}
      enableReInitialization={true}
      initialValues={{name: '', last_name: ''}}
      >
        {({data, setData, errors, reset, progress,processing,  handleSubmit})=> (
          <>
          <Form>
            <LabelField label='Name' name='name'/>
            <LabelField label='Last Name' name='last_name' />
          </Form>
          <button onClick={handleSubmit}>Submit</button>
          </>
        )}
      </InertiaForm>
    </div>
  );

}

export default App;
```

## InertiaForm

InertiaForm component sets the context using useForm hook and initial values.

### props

|         name         | data type | required | defaultValues|
|----------------------|-----------|----------|--------------|
|initialValues         |  object   |   true   |  undefined   |
|  onSubmit            | function  |   true   |  undefined   |
|enableReInitialization| boolean   |   false  |    false     |

## Form

renders form and passes the submit function

## LabeledDropdown

Renders a labled dropdown

### props

|         name       | data type | required | defaultValues |
|--------------------|-----------|----------|---------------|
|        list        |   array   |  true    |      []       |
|        name        |   string  |  true    |      ''       |
|        label       |   string  |  false   |      ''       |
|   errorClassName   |   string  |  false   |  text-danger  |
|   labelClassName   |   string  |  false   |  form-label   |
|   selectClassName  |   string  |  false   |  form-select  |
|   onChange         | function  |  false   |   undefined   |
|  formateLabel      | function  |  false   |   undefined   | 

### Formate label example

```jsx
<LabeledDropdown
 formateLabel={({ name }) => (
     <>
         {name}
     </>
 )}
 list={companies}
 onChange={(value) => setData({
     ...data,
     company_id: value,
 })}
 label="Company"
 name="company_id"
/>
```

## LabelField

### props

|         name       | data type | required | defaultValues |
|--------------------|-----------|----------|---------------|
|        disabled    |   boolean |  false   |   undefined   |
|        name        |   string  |  true    |      ''       |
|        label       |   string  |  false   |      ''       |
|        type        |   string  |  false   |     text      |  
|     placeholder    |   string  |  false   |   undefined   |
|   errorClassName   |   string  |  false   |   text-danger |
|   labelClassName   |   string  |  false   |   form-label  |
|   fieldClassName   |   string  |  false   |  form-control |
|   onChange         | function  |  false   |   undefined   |

## LabelTextArea

### props

|         name       | data type | required | defaultValues |
|--------------------|-----------|----------|---------------|
|        rows        |   integer |  false   |      4        |
|        cols        |   integer |  false   |      5        |
|        name        |   string  |  true    |      ''       |
|        label       |   string  |  false   |      ''       |
|     placeholder    |   string  |  false   |   undefined   |
|   errorClassName   |   string  |  false   |  text-danger  |
|   labelClassName   |   string  |  false   |  form-label   |
|  textareaClassName |   string  |  false   |  form-control |
|   onChange         | function  |  false   |  undefined    |

## License

MIT © [H5SH](https://github.com/H5SH)