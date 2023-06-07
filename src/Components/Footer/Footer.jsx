import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-purple-400 text-base-content">
        <div>
          <img width="150" height="150" src="https://cdn.dribbble.com/users/317918/screenshots/3850739/sw-01.jpg" alt="" />
          <p>Craftopia Art School Ltd.<br/>Providing reliable courses since 2020</p>
        </div> 
        <div className='sm:text-center'>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Art Classes</a> 
          <a className="link link-hover">Design Workshops</a> 
          <a className="link link-hover">Art Exhibitions</a> 
          <a className="link link-hover">Summer Art Camps</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className="mt-5 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Craftopia Art School Ltd. All rights reserved.</p>
          <p>Contact: info@craftopiaartschool.com</p>
          <p>Address: 123 Art Avenue, Kolkata, India</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
