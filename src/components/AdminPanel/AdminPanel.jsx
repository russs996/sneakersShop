import { Grid } from '@material-ui/core';
import React from 'react';
import AddProduct from './AddProduct';
import AddTable from './AddTable';
import Edit from './Edit';

const AdminPanel = () => {
    return (
        <div>
            <Grid>
                <AddProduct />
                <AddTable />
                <Edit />
            </Grid>
        </div>
    );
};

export default AdminPanel;