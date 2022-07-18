import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <section className="mb-4">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-instagram"></a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <MDBCol md="5" start="12">
                  <MDBInput
                    contrast
                    type="email"
                    label="Enter Email address above"
                    className="mb-4"
                  />
                </MDBCol>

                <div className="col-auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Mytimes News is providing News including various categories like:
              Sports, Health, Business, Entertainment, Science, Technology,
              etc... Visit our website for more info on mytimesnews.com
            </p>
          </section>

          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Usefull Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Bussiness
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      General
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Health
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                {/* <h5 className="text-uppercase">Links</h5> */}

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Science
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Techology
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white"></a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                {/* <h5 className="text-uppercase">Links</h5> */}

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white"></a>
                  </li>
                </ul>
              </MDBCol>

              {/* <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol> */}
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://Mytimesnews.com/">
            MytimesNews.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
