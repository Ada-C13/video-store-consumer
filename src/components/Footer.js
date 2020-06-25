import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 footer text-white pt-3">
      <div className="">
        <div className="row">
          <div className="d-flex col">
            <div className="footer-logo text-left">
              <a href="/"><img className="w-100" src="https://lh3.googleusercontent.com/pw/ACtC-3egOjtR1cwMLE4DWMqvjucZFIg_OgNhqZtie9V5whCbr-K9oWeSs_9zSXWVS3CMZLDZM_mxC68ZIV20qYpUwihwbMTCwSyWV_rpPl9OEr2xxQGxhq9aeOssSRHQnL2Zdw9VhKh_5W6EouKACuyRpCQC=w400-h173-no?authuser=0" alt = ""/></a>
            </div>
          </div>
          <div className="container text-left col">
            <h5 className="pb-1">About LA Videos</h5>
            <a href="/"><p>Careers</p></a>
            <a href="/"><p>Blog</p></a>
            <a href="/"><p>News</p></a>
            <a href="/"><p>Company Info</p></a>
          </div>
          <div className="container text-left col">
            <h5 className="pb-1">Troubleshooting</h5>
            <a href="/"><p>Customer Resolution</p></a>
            <a href="/"><p>Employee Contract</p></a>
            <a href="/"><p>Rentals Policy</p></a>
            <a href="/"><p>Contact Us</p></a>
          </div>
          <div className="container text-left col">
            <h5 className="pb-1">Community</h5>
            <a href="/"><p>Announcements</p></a>
            <a href="/"><p>Picnic Schedule</p></a>
            <a href="/"><p>Employee of the Month</p></a>
            <a href="/"><p>Videobook</p></a>
          </div>

          <div className="w-100"></div>
          <div className="col text-center">
            <p className="subtle-text px-2 small">© 2020 LA Videos, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;