import React from 'react';
//sweet alert
import swal from 'sweetalert';

const Footer = () => {
    return(
        <footer className="footer container">
        <div className="container">
          Developed by <a href="http://danieldiaz.herokuapp.com">Daniel Diaz</a> - <span className="badge badge-primary pointer" onClick={()=>{swal("Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.")}}> Copyright by musixmatch &copy;</span>
        </div>
      </footer>
    )
}

export default Footer;