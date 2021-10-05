import PropTypes from 'prop-types';

export const Input = ({ onChange, value, name, placeholder }) => (
    <input
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type='text'
    />
);

Input.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};