import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/GamesPage.css";

import Dropdown from 'react-bootstrap/Dropdown'
// import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export const GamesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect((() => {
    getProducts();
  }), [])

  const getProducts = () => {
    axios.get(`https://quiet-fortress-03621.herokuapp.com/games`).then((res) => {
      console.log("res", res.data);
      setProducts(res.data);
    })
  }

  return (
    <>


      <div style={{
        backgroundColor: "#121212"
      }}>
        <div style={{
          height: "60px",
          backgroundColor: "#121212",
          display: "flex",
          // border: "1px solid red"
        }}>
          <div >
            <p style={{
              marginLeft: "170px",
              fontSize: "22px",
              fontWeight: "400",
              color: "white",
              marginTop: "19px",
              fontFamily: "Brutal, sans-serif"
              // border: "1px solid blue"
              // lineHeight:"25px"

            }}> Popular Genres</p>

          </div>
        </div>
        <div style={{
          width: "74%",
          height: "277px",
          // border: "1px solid red",
          display: "flex",
          marginLeft: "11%",
          paddingBottom: "20%"

          // backgroundColor:"#121212"

        }}>
          <div style={{
            width: "24%",
            height: "270px",
            // border: "1px solid blue",
            // paddingRight:"10px"
            marginRight: "2%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",


          }}>
            <div style={{
              height: "210px",
              // border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="/head3.jpg" alt="not found" style={{
                width: "230px",
                height: "180px",
                marginTop: "20px",

                // marginRight:"5px"
                borderRadius: "10px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div className="ahoverhead" style={{
              height: "50px",
              // border: "1px solid red",
              backgroundColor: "#1f1f1f",
              "&:hover": {
                background: "#0b0a0a",
                cursor: "pointer"
              }
            }}>
              <p style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Brutal, sans-serif",
                fontSize: "21px",
                // fontWeight: "400",
                // backgroundColor:"#1f1f1f",

                paddingTop: "4%"




              }}> Sports Games</p>
            </div>
          </div>
          <div style={{
            width: "24%",
            height: "270px",
            // border: "1px solid blue",
            // paddingRight:"10px"
            marginRight: "2%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",

          }}>
            <div style={{
              height: "210px",
              //  border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="/head4.jpg" alt="not found" style={{
                width: "230px",
                height: "180px",
                marginTop: "20px",
                // marginRight:"5px"
                borderRadius: "10px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div style={{
              height: "50px",
              // border: "1px solid red",
              backgroundColor: "#1f1f1f",

            }}>
              <p style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Brutal, sans-serif",
                fontSize: "21px",
                // fontWeight: "400",
                // backgroundColor:"#1f1f1f",

                paddingTop: "4%"




              }}> Strategy Games</p>
            </div>
          </div>

          <div style={{
            width: "24%",
            height: "270px",
            // border: "1px solid blue",
            // paddingRight:"10px"
            marginRight: "2%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",

          }}>
            <div style={{
              height: "210px",
              //  border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="/head5.jpg" alt="not found" style={{
                width: "220px",
                height: "180px",
                marginTop: "20px",
                // marginRight:"5px"
                borderRadius: "10px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div style={{
              height: "50px",
              // border: "1px solid red",
              backgroundColor: "#1f1f1f",

            }}>
              <p style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Brutal, sans-serif",
                fontSize: "21px",
                // fontWeight: "400",
                // backgroundColor:"#1f1f1f",

                paddingTop: "4%"




              }}> Survival Games</p>
            </div>
          </div>

          <div style={{
            width: "23%",
            height: "270px",
            // border: "1px solid blue",
            // paddingRight:"10px"
            // marginRight:"3%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",

          }}>
            <div style={{
              height: "210px",
              //  border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="/head6.jpg" alt="not found" style={{
                width: "220px",
                height: "180px",
                marginTop: "20px",
                // marginRight:"5px"
                borderRadius: "10px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div style={{
              height: "50px",
              // border: "1px solid red",
              backgroundColor: "#1f1f1f",

            }}>
              <p style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Brutal, sans-serif",
                fontSize: "20px",
                // fontWeight: "400",
                // backgroundColor:"#1f1f1f",

                paddingTop: "4%"




              }}> Tower Defense Games</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        // backgroundColor:"red",
        // border: "1px solid red",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#121212"



      }}>
        <Dropdown style={{
          // border: "1px solid red",
          marginLeft: "11% "
        }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
            // color: "#838282",
            width: "200px",
            height: "50px",
            backgroundColor: "#121212",
            // marginRight:"50%",
            border: "none",
            fontSize: "14px",
            // paddingLeft:"50%"

          }}>

            <span style={{
              color: "#838282",
            }}> Sort By:</span> <span style={{
              color: "#d3cbcbe7"
            }}> New Release</span>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{
            backgroungColor: "#121212"
          }}>
            <div className="ablack">
              <Dropdown.Item href="#/action-1"> Price:Low to High</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Price:High to Low</Dropdown.Item>
              {/* <Dropdown.Item ><button>Price:High to Low</button> </Dropdown.Item> */}
            </div>
          </Dropdown.Menu>

        </Dropdown>
        <div style={{
          color: "white",
          // border: "1px solid red",
          // paddingTop: "10px",
          width: "10%",
          marginRight: "20.5%"


        }}>
          <p style={{
            textAlign: "center",
            color: "white",
            fontSize: "15px",
            // border: "1px solid blue",
            marginTop: "10%",
            // width: "100%",
            // height: "100%"


          }}> Filters</p>
        </div>
      </div>
      <div className="amain" style={{
        width: "100%",
        height: "100%",
        display: "flex",
        // border: "1px solid red"

      }}>
        <div className="games" style={{
          width: "950px",
          height: "100%",
          // border: "1px solid blue",
          display: "grid",

          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gridGap: "5px",

          // backgroundColor:"blue"


        }}>

          {/* <div className="test" style={{
                           width: "50%",
                           height: "100px",
                           border:"1px solid red",
                           color:"red"
                       }} >
                           <span>Ajinkya</span>
                       </div> */}
          <>


            {products.map((el) => {

              return (

                <div key={el._id} id="agamespage"
                  className="container" style={{
                    backgroundColor: "#121212",
                    color: "white",
                    marginTop: "10px",
                    // border: "1px solid yellow",
                    paddingBottom: "30px",
                    textAlign: "left",
                    textDecoration: "none",
                    fontFamily: "Brutal, sans-serif"
                  }}>
                  <Link to={`/individualgame/${el._id}`} key={el._id} >
                    <div className="aimg" style={{
                      width: "100%",
                      height: "300px",
                      // border: "1px solid red"
                    }}>

                      <img src={el.image} alt="err" height="300px" width="100%" />
                    </div>
                  </Link>
                  <div className="atitle">
                    <p>{el.title}</p>
                    <div style={{
                      // border: "1px solid red",
                      height: "40px",
                      display: "flex"
                    }}>
                      <span ><button className="adiscount">{el.discount}%</button> </span>
                      <p className="aprice">₹ {el.price}</p>
                    </div>
                  </div>
                </div>


              );
            })}
          </>
        </div>
        <div className="aj" style={{
          width: "200px",
          height: "500px",
          // border: "1px solid blue",
          // marginLeft: "30px"
        }}>
          <div style={{
            // border: "1px solid red",
            display: "flex",

            // backgroundColor: "#202020"

          }}>

            <img src="/magni1.png" alt="" style={{
              width: "20px",
              height: "15px",
              backgroundColor: "#202020",
              // border: "1px solid blue",
              // paddingTop: "10px",
              marginTop: "14px",
              // marginLeft: "10px"

            }} />

            <div>
              <input type="text" placeholder="Keywords" style={{
                marginBottom: "10px",
                color: "white",
                backgroundColor: "#202020",
                // paddingLeft:"20px",
                width: "80%",
                border: "none"
              }} />
            </div>
          </div>
          <div>
            <div className="aline" style={{
              borderTop: "0.5px solid gray",
            }}>

            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="aeventhover" style={{
                border: "none",
                textAlign: "left",
                padding: "20px",
                fontFamily: "Brutal, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                color: "#838282",
                backgroundColor: "#121212"
              }}>
                EVENTS
              </Dropdown.Toggle>

              <Dropdown.Menu className="aright">
                <Dropdown.Item href="#/action-1"> Spring Sales</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Square Enix Sales</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="aline" style={{
              borderTop: "0.5px solid gray",
            }}>

            </div>


            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                padding: "20px",
                fontFamily: "Brutal, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                color: "#838282",
                backgroundColor: "#121212"
              }}>
                PRICE
              </Dropdown.Toggle>

              <Dropdown.Menu className="aright">
                <Dropdown.Item href="#/action-1">Free</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Under 750.00</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Under 1,500.00</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Under 2,550.00</Dropdown.Item>
                <Dropdown.Item href="#/action-2">1,099.00 and above</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="aline" style={{
              borderTop: "0.5px solid gray",
            }}>

            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                padding: "20px",
                fontFamily: "Brutal, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                color: "#838282",
                backgroundColor: "#121212"
              }}>
                GENRE
              </Dropdown.Toggle>

              <Dropdown.Menu className="aright">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Indie</Dropdown.Item>
                <Dropdown.Item href="#/action-2">RGP</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Strategy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Open Worls</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Shooter</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Puzzel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="aline" style={{
              borderTop: "0.5px solid gray",
            }}>

            </div>


            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                padding: "20px",
                fontFamily: "Brutal, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                color: "#838282",
                backgroundColor: "#121212"
              }}>
                FEATURES
              </Dropdown.Toggle>

              <Dropdown.Menu className="aright">
                <Dropdown.Item href="#/action-1">Achivements</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Single Player</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Controller Support</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Multiplayer</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Co-op</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Competitive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="aline" style={{
              borderTop: "0.5px solid gray",
            }}>

            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                padding: "20px",
                fontFamily: "Brutal, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                color: "#838282",
                backgroundColor: "#121212"
              }}>
                TYPES
              </Dropdown.Toggle>

              <Dropdown.Menu className="aright">
                <Dropdown.Item href="#/action-1">Games</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Games Bundel</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Editor</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Games Add-on</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Game Demo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="aline" style={{
              borderTop: "0.5px solid gray",
            }}>

            </div>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                padding: "20px",
                fontFamily: "Brutal, sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                color: "#838282",
                backgroundColor: "#121212"
              }}>
                PLATFORM
              </Dropdown.Toggle>

              <Dropdown.Menu className="aright" style={{
                border: "none",

              }}>
                <Dropdown.Item href="#/action-1">Windows</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mac OS</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <div className="aline" style={{
              borderTop: "0.5px solid gray",
            }}>

            </div>

          </div>
        </div>
      </div>






    </>
  );
};
