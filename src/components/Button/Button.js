import React from 'react';
import classNames from 'classnames';

import './styles.css';

const Button = ({ children, loading, mod, ...props }) => (
    <button className={classNames('button', mod)} disabled={loading} {...props}>
        {loading ? 'Loading...' : children}
    </button>
);

Button.defaultProps = {
    loading: false,
};

export default Button;
