import React from "react";

function About() {
  return (
    <div>
      <div class="container p-3 mb-2  bg-light text-dark">

        <div class="row justify-content-start">
          <div class="col-md-12 mt-5">
            <header>
              <h1>About Me</h1>
            </header>
            <hr />
          </div>
        </div>

        <div class="row justify-content-start">
          <div class="col-md-3">
            <img src="assets/images/mosaicV2_200x200.jpg" class="img-fluid" alt="Photo Mosaic of Anzel" />
          </div>
          <div class="col-md-9">
            <blockquote class="blockquote">
              <p class="mb-0">"Give me courage over bravery, for pursuing my goals over my fears
              serves to temper the worth of my goals. To have no fears, on the other hand, only invites
                            downfall over the first instance of it."</p>
            </blockquote>
          </div>
        </div>

        <div class="row justify-content-start mt-3 ml-2 mr-2">
          <p>
            I graduated from UC Santa Barbara with a bachelors degree in Biology late 2018, but did not truly
            know where to go from there, and lacked the practical experience necessary to get started in the
            field. After a year of interning at UCSD Moore's Cancer Center, I began to further explore
            other interests that had piqued in my undergraduate classes, in hopes of finding something I was
            passionate about.
                </p>
          <p>
            Coding is a skill that combines my passion for mathematics and my systematic approach to learning.
            With coding, I find that my natural tendencies to focus on all details thrives, as the demanding
            nature of coding syntax and the completeness of instructions needed to perform tasks both require
            this trait. Add in the satisfaction of getting a file to work as intended and the appeal of making
            apps on the web, where they can be widely used, viewed, and appreciated, and my desire to be a web
            designer, although new, has been the strongest motivation that I have had in half a decade. I know
            I'm up against those who have more coding experience than me, but I have the courage to go for it
            anyways. After all, everyone had to start somewhere, and my dedication to keep learning and to grow
            in areas other than strictly coding will lead me into becoming what I believe will be a succesfully
            web developer.

                </p>
        </div>
      </div>
    </div>

  );
}

export default About;
