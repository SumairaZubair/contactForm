import logo from './image-2/download.png'
const Navigation = () => {
    return (
      <nav className='navigation'>
        <div className="logo">
          <img src={logo} alt="do some coding logo" />
        </div>
  
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
  export default Navigation