import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Gregory Maher</h2>
          <ul>
            <li>
            {/* Add info here */}
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/gregory-maher-4b783b119/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>
            {/*Add link in <a> tag below to download resume*/}
          <a
            href="" 
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
              <strong>Browser Based Technologies: </strong><br />
              HTML, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, Progressive Web Applications, React.js
            </li>
            <br />
            <li>
              <strong>Server Side Development: </strong> <br />
              Node.js, Express.js, User Authentication, MERN Stack
            </li>
            <br />
            <li>
              <strong>Databases: </strong> <br />
              MySQL, MongoDB
            </li>
            <br />
            <li>
              <strong>API Design:</strong> <br />
              API, REST, JSON, AJAX
            </li>
            <br />
            <li>
              <strong>Deployment: </strong> <br />
              Heroku, Git, GitHub Pages
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;