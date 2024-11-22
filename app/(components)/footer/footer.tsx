import React from 'react'


export default function Footer() {
  return (
    <div> {/* <!-- Footer Section Start --> */}
      <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
          Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
          {/* <i className="fab fa-facebook-f"></i> */}
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
      </section>
    </div>
  )
}
