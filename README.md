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

|         name         | data type | required |
|----------------------|-----------|----------|
|initialValues         |  object   |   true   |
|  onSubmit            | function  |   true   |
|enableReInitialization| boolean   |   false  |

## Form

renders form and passes the submit function

## LabeledDropdown

Renders a labled dropdown

### props

|         name       | data type | required |
|--------------------|-----------|----------|
|        list        |   array   |  true    |
|        name        |   string  |  true    |
|        label       |   string  |  false   |
|   errorClassName   |   string  |  false   |
|   labelClassName   |   string  |  false   |
|   selectClassName  |   string  |  false   |
|   onChange         | function  |  false   |

<<<<<<< HEAD
Formate label example

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

|         name       | data type | required |
|--------------------|-----------|----------|
|        disabled    |   boolean |  false   |
|        name        |   string  |  true    |
|        label       |   string  |  false   |
|        type        |   string  |  false   |
|     placeholder    |   string  |  false   |
|   errorClassName   |   string  |  false   |
|   labelClassName   |   string  |  false   |
|   fieldClassName   |   string  |  false   |
|   onChange         | function  |  false   |

## LabelTextArea

### props

|         name       | data type | required |
|--------------------|-----------|----------|
|        rows        |   integer |  false   |
|        cols        |   integer |  false   |
|        name        |   string  |  true    |
|        label       |   string  |  false   |
|     placeholder    |   string  |  false   |
|   errorClassName   |   string  |  false   |
|   labelClassName   |   string  |  false   |
|  textareaClassName |   string  |  false   |
|   onChange         | function  |  false   |

## License

MIT © [H5SH](https://github.com/H5SH)