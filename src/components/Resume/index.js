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

          <a
            href=""  {/*Add link to download resume*/}
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
                {/* Add proficiencies here*/}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;