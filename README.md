# InertiaForm Component

InertiaForm component that is similar to formik but uses the useForm hook by inertia underneath

## Parent dependencies

- react
- @inertiajs/react

## How To Use

```
import { InertiaForm, LabelField, Form } from './InertiaForm';

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
