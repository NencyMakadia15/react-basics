import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
        
        {/* <h1 className={styles.success}>Success</h1>         //will show error if we use this class because we can't use class that is defined for some other component. */}

        <h1 className='error'>Error</h1>
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
