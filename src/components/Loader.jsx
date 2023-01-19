import React from 'react';
import { Spinner } from '@chakra-ui/react';

import "../App.css";

const Loader = () => {
  return (
    <div className='loader'>
        <Spinner color='red.500' />
    </div>
  )
}

export default Loader