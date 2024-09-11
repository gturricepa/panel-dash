import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

export const ErrorMessage = ({ msg }) => {

    return (
        <Alert severity="error">
                {msg}
        </Alert>
        )
};