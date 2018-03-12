import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { styles } from '../../styles/assets/LoadingProgress'
const CircularIndeterminate = (props) => {
    const {classes} = props
    return (
      <div className={ classes.progress }>
        <CircularProgress size={ 50 }/>
      </div>
    )
  }
  export default styles(CircularIndeterminate)