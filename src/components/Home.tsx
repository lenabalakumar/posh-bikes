import googlePlay from "../assets/google_play.png";
import appStore from "../assets/appstore.png";
import ktm from "../assets/ktm.png";
import bmw from "../assets/bmw.png";
import harley from "../assets/harley.png";
import re from "../assets/royal_enfield.png";
import ducati from "../assets/ducati.png";
import yamaha from "../assets/yamaha.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "grey",
        // opacity: 0.5,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "75%",
          // backgroundColor: "pink",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            // padding: "5px",
          }}
        >
          <p
            style={{
              fontSize: "12",
              color: "black",
            }}
          >
            Posh bikes - Best place to buy two wheelers in India
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            scrollBehavior: "smooth",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "500px",
              backgroundColor: "white",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "60px",
                justifyContent: "center",
              }}
            >
              <img
                src={ktm}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                width: "150px",
                height: "60px",
                justifyContent: "center",
              }}
            >
              <img
                src={re}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                width: "150px",
                height: "60px",
                justifyContent: "center",
              }}
            >
              <img
                src={yamaha}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                width: "150px",
                height: "60px",
                justifyContent: "center",
              }}
            >
              <img
                src={ducati}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                width: "150px",
                height: "60px",
                justifyContent: "center",
              }}
            >
              <img
                src={harley}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                width: "150px",
                height: "60px",
                justifyContent: "center",
              }}
            >
              <img
                src={bmw}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
          <div
            style={{ width: "50%", height: "500px", backgroundColor: "green" }}
          >
            <div
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: 0.75,
                height: "100%",
                width: "100%",
                position: "relative",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "150px",
                  width: "100%",
                  position: "absolute",
                  bottom: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "40px",
                      // backgroundColor: "blue",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      Download our app to know more
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "120px",
                      width: "100%",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={googlePlay}
                      style={{ height: 80, width: 120, objectFit: "cover" }}
                    />
                    {/* <img
                      src={appStore}
                      style={{ height: 80, width: 120, objectFit: "cover" }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              // backgroundColor: "pink",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "75%",
                display: "flex",
                padding: "10px",
                justifyContent: "start",
                alignItems: "center",
                // backgroundColor: "purple",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <img
                  src={instagram}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <img
                  src={whatsapp}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <img
                  src={facebook}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              {/* <div
                style={{
                  width: "40px",
                  height: "40px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <img
                  src={instagram}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div> */}
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              // backgroundColor: "beige",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div style={{ padding: "5px" }}>
                <p style={{ fontSize: "12px", margin: "0", padding: "0" }}>
                  <a href="https://www.google.com">About us</a>
                </p>
              </div>
              <div style={{ padding: "5px" }}>
                <p style={{ fontSize: "12px", margin: "0", padding: "0" }}>
                  <a href="https://www.google.com">Contact us</a>
                </p>
              </div>
              <div style={{ padding: "5px" }}>
                <p style={{ fontSize: "12px", margin: "0", padding: "0" }}>
                  <a href="https://www.google.com">Terms</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
