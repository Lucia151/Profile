import React from 'react'
import frontend from "../../src/assets/images/frontend.png";
import backend from "../../src/assets/images/backend.png"
import Myfooter from "../Components/myfooter";


export default function Experience() {
  return (

    <div style={{ display: "flex", flexDirection: "column", justifyContent: "s", paddingTop: "1rem", backgroundColor: "blue", height: "100vh" }}>
      {/* <div style={{ width: "100%", paddingTop: "0.75rem", maxWidth: "18rem", margin: "auto", padding: "0" }}> */}
        <div style={{ position: "relative", backgroundcolor: "#345676", fontFamily: "sans-serif", fontSize: "0.875rem", fontWeight: "bold" }}>
          {/* ========== vertical line running through the middle ========== */}
          <div style={{ position: "absolute", width: "4px", backgroundColor: "#667eea", height: "100%", left: "50%", transform: "translateX(-50%)" }}></div>
{/* <div className='section'></div> */}

     {/*left card */}
          <div className='left' style={{ marginTop: "1.5rem", marginBottom: "1.5rem", marginRight: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

              <div style={{ width: "20%", marginRight: "30rem" }}>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  style={{
                    backgroundColor: "#fff",
                    padding: "1rem",
                    borderRadius: "0.25rem",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease-in",
                  }}
                >
                  <h3
                    style={{
                      color: "#667eea",
                      marginBottom: "0.5rem",
                      marginTop: "0.25rem",
                      fontSize: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    Frontend Development
                  </h3>

                  <p
                    style={{
                      color: "#4a5568",
                      fontSize: "0.9375rem",
                      lineHeight: "1.5",
                      textAlign: "center",
                    }}
                  >
                    Using modern HTML, CSS, and JavaScript frameworks, I can transform your design concepts into interactive and intuitive interfaces that captivate users and enhance their interaction with your digital products.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#667eea",
                  borderWidth: "0.25rem",
                  borderColor: "#ffffff",
                  borderRadius: "9999px",
                  width: "2.5rem",
                  height: "2.5rem",
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -1.5rem)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <figure style={{ margin: "0" }}>
                  <img src={frontend} alt="" />
                </figure>
              </div>
            </div>
          </div>

      {/*right card*/}
          <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

              <div style={{ width: "20%", marginLeft: "30rem" }}>
                <div
                  data-aos="fade-left"
                  dat-aos-duration="1300"
                  dat-aos-delay="50"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "1rem",
                    borderRadius: "0.25rem",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease-in",
                  }}
                >
                  <h3
                    style={{
                      color: "#667eea",
                      marginBottom: "0.5rem",
                      marginTop: "0.25rem",
                      fontSize: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    Backend Development
                  </h3>

                  <p
                    style={{
                      color: "#4a5568",
                      fontSize: "0.9375rem",
                      lineHeight: "1.5",
                      textAlign: "center",
                    }}
                  >
                    With expertise in server-side programming languages, databases, and frameworks, I can build robust back-end systems to power your software applications and websites.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#667eea",
                  borderWidth: "0.25rem",
                  borderColor: "#ffffff",
                  borderRadius: "9999px",
                  width: "2.5rem",
                  height: "2.5rem",
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -1.5rem)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <figure style={{ margin: "0" }}>
                  <img src={backend} alt="" />
                </figure>
              </div>
            </div>
          </div>

    {/*left card*/}
          <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

              <div style={{ width: "20%", marginRight: "30rem" }}>
                <div
                  data-aos="fade-right"
                  dat-aos-duration="1400"
                  dat-aos-delay="100"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "1rem",
                    borderRadius: "0.25rem",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease-in",
                  }}
                >
                  <h3
                    style={{
                      color: "#667eea",
                      marginBottom: "0.5rem",
                      marginTop: "0.25rem",
                      fontSize: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    App Development
                  </h3>

                  <p
                    style={{
                      color: "#4a5568",
                      fontSize: "0.9375rem",
                      lineHeight: "1.5",
                      textAlign: "center",
                    }}
                  >
                    Based on your requirements, I can provide valuable insights and consulting to refine your app concept, identify key features, and determine the optimal technology stack and platform for development.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#667eea",
                  borderWidth: "0.25rem",
                  borderColor: "#ffffff",
                  borderRadius: "9999px",
                  width: "2.5rem",
                  height: "2.5rem",
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -1.5rem)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <figure style={{ margin: "0" }}>
                  <img src="" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <Myfooter />
      </div>
    // </div>



  )
}
