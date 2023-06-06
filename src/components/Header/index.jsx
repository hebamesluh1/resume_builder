import './style.scss';
import img from '../../assets/resume.svg'
const Header = () => {
  return (
    <div className='header-hero'>
        <div className="left">
        <p className='title'>A <span>Resume</span> that stands out !</p>
        <p className='title'>Make your own resume <span> Its free</span></p>
        </div>
        <div className="right">
            <img src={img} alt="image" />
        </div>
    </div>
  )
}

export default Header