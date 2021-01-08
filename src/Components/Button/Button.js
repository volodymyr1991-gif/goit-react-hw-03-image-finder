import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({fechArticles} )=>{
    return(
        <button className='Button' type="button" onClick={fechArticles}>
            Load More
          </button>
    )
}

Button.propTypes = {
    fechArticles: PropTypes.func,
}

export default Button