import { Stack } from '@mui/material';
import React, { useContext } from 'react';
import { QUIZ_CONTEXT } from '../../Contexts/Contexts';
import Styles from './Result.module.css';

const Result = () => {
  const { score } = useContext(QUIZ_CONTEXT)


  return (
    <>
      <Stack
      className={Styles.result}
      >
        Total Score: {score}
      </Stack>
    </>
  )
}

export default Result