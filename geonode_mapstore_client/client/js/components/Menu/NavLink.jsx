/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { forwardRef } from 'react';

const NavLink = forwardRef(({
    children,
    className,
    ...props
}, ref) => {
    return (
        <a
            {...props}
            ref={ref}
            className={`nav-link${className ? ` ${className}` : ''}`}
        >
            {children}
        </a>
    );
});

export default NavLink;
