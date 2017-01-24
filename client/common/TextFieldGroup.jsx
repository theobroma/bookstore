import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div>
      <label className="label">{label}</label>
      <p className="control has-icon">
        <input
          className={ classnames('input', {'is-danger': error}) }
          type={type}
          placeholder={label}
          name={field}
          value={value}
          onChange={onChange}
        />
        <span className="icon is-small">
          <i className="fa fa-envelope"/>
        </span>
        { error && <span className="help is-danger">{error}</span>}
      </p>
    </div>
  );
};

export default TextFieldGroup;
