import React from "react";

function Contact() {
  return (
    <div>
      <div class="row justify-content-center">
        <div class="col ml-2">
          <header>
            <h1>Contact information</h1>
          </header>
          <hr />
        </div>
      </div>
      <div class="row mb-5 justify-content-center">

        <div class="col-md-auto">
          <div class="parentFade">
            <h3 class="mb-0"><span class="fade">Edward</span><span class="shifter"> Anzel Capparelli</span>
            </h3>
            <p class="half-size preferName">Preferred Name</p>
            <p class="half-size fullName">Full Name</p>
          </div>


          <div><strong>Email: </strong><a href="mailto:anzelcapparelli@gmail.com">anzelcapparelli@gmail.com</a></div>
          <div><strong>Phone (text or call): </strong><a href="tel:6199521941">(619) 952-1941</a></div>
          <div><strong>Resume (PDF): </strong><a href="web_dev_resume.pdf" target="_blank">updated Feb 4, 2021</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
