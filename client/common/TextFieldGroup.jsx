import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, icon, onChange }) => (
  <div>
    <label className="label">{label}</label>
    <p className="control has-icon">
      <input
        className={classnames('input', { 'is-danger': error })}
        type={type}
        placeholder={label}
        name={field}
        value={value}
        onChange={onChange}
      />
      <span className="icon is-small">
        <i className={`fa ${icon}`} />
      </span>
      { error && <span className="help is-danger">{error}</span>}
    </p>
  </div>
  );


TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
  /* checkUserExists: React.PropTypes.func*/
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
