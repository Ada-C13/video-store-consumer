
import React, { useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';


const styles = {
  alert: {
    left: '0',
    pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: '1500',
  },
  form: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 10px 15px 0 #ccc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '400px',
    height: '300px',
    margin: '0 auto',
    padding: '50px 0',
  },
  input: {
    width: '200px',
  },
  main: {
    backgroundColor: '#eef',
    height: '100vh',
    padding: '80px 20px',
  },
  text: {
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '20px',
  },
};

const WithFlash = (props) => {
  const [flash, setFlash] = useState({
    severity: '',
    message: '',
  });
  const [showFlash, setShowFlash] = useState(null);

  useEffect(() => {
    prepareFlashMessage(props.displayMessage)
  }, [props.displayMessage])

  const prepareFlashMessage = (displayMessage) => {
    if (displayMessage === null || displayMessage.message == "") {
      return;
    }
    setShowFlash(true);

    setFlash(displayMessage);

    setTimeout(() => {
      setShowFlash(false);
    }, 5000);
  };

  return (
    <Fade in={showFlash} timeout={{ enter: 300, exit: 1000 }}>
      <Alert style={styles.alert} severity={flash.severity}>{flash.message}</Alert>
    </Fade>
  )
};

export default WithFlash;