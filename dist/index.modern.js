import { createContext, useEffect, useContext } from 'react';
import { useForm } from '@inertiajs/react';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var FormContext = createContext(null);
var InertiaForm = function InertiaForm(_ref) {
  var initialValues = _ref.initialValues,
    onSubmit = _ref.onSubmit,
    _ref$enableReInitiali = _ref.enableReInitialization,
    enableReInitialization = _ref$enableReInitiali === void 0 ? false : _ref$enableReInitiali,
    children = _ref.children;
  var form = useForm(initialValues);
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form.data);
  }
  function handleChange(e) {
    var _extends2;
    form.setData(_extends({}, form.data, (_extends2 = {}, _extends2[e.target.name] = e.target.value, _extends2)));
  }
  useEffect(function () {
    enableReInitialization && form.setData(initialValues);
  }, [initialValues]);
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: _extends({}, form, {
      handleSubmit: handleSubmit,
      handleChange: handleChange
    })
  }, children(_extends({}, form, {
    handleSubmit: handleSubmit,
    handleChange: handleChange
  })));
};
var Form = function Form(_ref2) {
  var children = _ref2.children;
  var _useInertiaForm = useInertiaForm(),
    handleSubmit = _useInertiaForm.handleSubmit;
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, children);
};
function useInertiaForm() {
  return useContext(FormContext);
}
var LabeledDropdown = function LabeledDropdown(_ref3) {
  var formateLabel = _ref3.formateLabel,
    _ref3$list = _ref3.list,
    list = _ref3$list === void 0 ? [] : _ref3$list,
    _ref3$name = _ref3.name,
    name = _ref3$name === void 0 ? '' : _ref3$name,
    _ref3$errorClassName = _ref3.errorClassName,
    errorClassName = _ref3$errorClassName === void 0 ? 'text-danger' : _ref3$errorClassName,
    _ref3$labelClassName = _ref3.labelClassName,
    labelClassName = _ref3$labelClassName === void 0 ? 'form-label' : _ref3$labelClassName,
    _ref3$label = _ref3.label,
    label = _ref3$label === void 0 ? '' : _ref3$label,
    _ref3$selectClassName = _ref3.selectClassName,
    selectClassName = _ref3$selectClassName === void 0 ? 'form-select' : _ref3$selectClassName,
    _onChange = _ref3.onChange;
  var _useContext = useContext(FormContext),
    data = _useContext.data,
    errors = _useContext.errors,
    setData = _useContext.setData;
  return /*#__PURE__*/React.createElement(Fragment, null, label && /*#__PURE__*/React.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/React.createElement("select", {
    name: name,
    value: formateLabel ? JSON.stringify(data[name]) : data[name],
    className: selectClassName,
    onChange: function onChange(e) {
      var _extends3;
      return _onChange ? _onChange(formateLabel ? JSON.parse(e.target.value) : e.target.value) : setData(_extends({}, data, (_extends3 = {}, _extends3[name] = e.target.value, _extends3)));
    }
  }, list.map(function (name, index) {
    return /*#__PURE__*/React.createElement("option", {
      value: typeof name === 'string' ? name : JSON.stringify(name),
      key: index
    }, formateLabel ? formateLabel(name) : name);
  })), errors[name] && /*#__PURE__*/React.createElement("div", {
    className: errorClassName
  }, errors[name]));
};
var LabelField = function LabelField(_ref4, props) {
  var disabled = _ref4.disabled,
    _ref4$name = _ref4.name,
    name = _ref4$name === void 0 ? '' : _ref4$name,
    _ref4$type = _ref4.type,
    type = _ref4$type === void 0 ? '' : _ref4$type,
    _ref4$errorClassName = _ref4.errorClassName,
    errorClassName = _ref4$errorClassName === void 0 ? '' : _ref4$errorClassName,
    _ref4$labelClassName = _ref4.labelClassName,
    labelClassName = _ref4$labelClassName === void 0 ? '' : _ref4$labelClassName,
    _ref4$label = _ref4.label,
    label = _ref4$label === void 0 ? '' : _ref4$label,
    _ref4$fieldClassName = _ref4.fieldClassName,
    fieldClassName = _ref4$fieldClassName === void 0 ? '' : _ref4$fieldClassName,
    placeHolder = _ref4.placeHolder,
    _onChange2 = _ref4.onChange;
  var _useContext2 = useContext(FormContext),
    data = _useContext2.data,
    errors = _useContext2.errors,
    setData = _useContext2.setData;
  return /*#__PURE__*/React.createElement(Fragment, null, label && /*#__PURE__*/React.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    placeholder: placeHolder,
    type: type,
    name: name,
    value: data[name],
    className: fieldClassName,
    onChange: function onChange(e) {
      var _extends4;
      return _onChange2 ? _onChange2(e) : setData(_extends({}, data, (_extends4 = {}, _extends4[name] = e.target.value, _extends4)));
    }
  }, props)), errors[name] && /*#__PURE__*/React.createElement("div", {
    className: errorClassName
  }, errors[name]));
};
var LabelTextArea = function LabelTextArea(_ref5, props) {
  var _ref5$name = _ref5.name,
    name = _ref5$name === void 0 ? '' : _ref5$name,
    _ref5$rows = _ref5.rows,
    rows = _ref5$rows === void 0 ? 4 : _ref5$rows,
    _ref5$cols = _ref5.cols,
    cols = _ref5$cols === void 0 ? 50 : _ref5$cols,
    _ref5$errorClassName = _ref5.errorClassName,
    errorClassName = _ref5$errorClassName === void 0 ? '' : _ref5$errorClassName,
    _ref5$labelClassName = _ref5.labelClassName,
    labelClassName = _ref5$labelClassName === void 0 ? '' : _ref5$labelClassName,
    _ref5$label = _ref5.label,
    label = _ref5$label === void 0 ? '' : _ref5$label,
    _ref5$textareaClassNa = _ref5.textareaClassName,
    textareaClassName = _ref5$textareaClassNa === void 0 ? '' : _ref5$textareaClassNa,
    placeHolder = _ref5.placeHolder,
    _onChange3 = _ref5.onChange;
  var _useContext3 = useContext(FormContext),
    data = _useContext3.data,
    errors = _useContext3.errors,
    setData = _useContext3.setData;
  return /*#__PURE__*/React.createElement(Fragment, null, label && /*#__PURE__*/React.createElement("label", {
    className: labelClassName
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    value: data[name],
    name: name,
    className: textareaClassName,
    rows: rows,
    cols: cols,
    placeholder: placeHolder,
    onChange: function onChange(e) {
      var _extends5;
      return _onChange3 ? _onChange3(e) : setData(_extends({}, data, (_extends5 = {}, _extends5[name] = e.target.value, _extends5)));
    }
  }, props)), errors[name] && /*#__PURE__*/React.createElement("div", {
    className: errorClassName
  }, errors[name]));
};

export { Form, InertiaForm, LabelField, LabelTextArea, LabeledDropdown, useInertiaForm };
//# sourceMappingURL=index.modern.js.map
