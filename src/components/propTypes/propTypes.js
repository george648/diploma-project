import PropTypes from 'prop-types';

export const todosListPropType = PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
});