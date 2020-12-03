import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function UserForm() {
    return( 
        <form>
            <TextField id="standard-basic" label="Name" /> 
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </form>
    );
}

export default UserForm;