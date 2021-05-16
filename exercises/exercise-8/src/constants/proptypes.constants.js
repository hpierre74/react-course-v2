import PropTypes from 'prop-types';

export const CHILDREN_PROP_TYPES = PropTypes.oneOfType([
  PropTypes.array.isRequired,
  PropTypes.object,
  PropTypes.element,
]).isRequired;
