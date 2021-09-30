import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { closeSnackBar } from '../../actions';


const Alert = (props) => <MuiAlert elevation={9} variant="filled" {...props} />;
  

function Notification({ click, closeSnackBar }) {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        closeSnackBar();
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
            open={click} 
            autoHideDuration={3000} 
            onClose={handleClose}
        >
                <Alert onClose={handleClose} severity="success">
                    Product is added to basket! 
                </Alert>
        </Snackbar>
    );
}

const mapStateToProps = ({ click }) => ({ click });

const mapDispatchToProps = { closeSnackBar };

export default connect(mapStateToProps, mapDispatchToProps)(Notification);