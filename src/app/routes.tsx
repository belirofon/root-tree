import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes as RouterRoutes} from 'react-router-dom';
import HomePage from '../pages/HomePage';


/**
 * ${1:Description placeholder}
 *
 * @returns {*}
 */
export const Routes: React.FC = () => {
  
    return (
        <AnimatePresence>
            <RouterRoutes>
                <Route path="/" element={<HomePage />} />
            </RouterRoutes>
        </AnimatePresence>
    );
};
