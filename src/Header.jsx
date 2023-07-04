import React from 'react'
import Job from './data/images/Job.png'
import { Link } from 'react-router-dom';


const imageUrl = "https://www.shutterstock.com/image-vector/job-search-logo-vector-illustration-260nw-1861309303.jpg";


const Header = () => {
  return (
    <div className='header__container'>
        <Link to='/'><div className="header__container__image" style={{backgroundImage: `url(${Job})`}}></div></Link>
        <Link to='/home' style={{textDecoration:'none'}}><div className="header__container__button">Find Your Fit</div></Link>

        
    </div>
  )
}

export default Header