import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
