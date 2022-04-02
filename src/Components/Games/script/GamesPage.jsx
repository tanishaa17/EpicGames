import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/GamesPage.css";

import Dropdown from 'react-bootstrap/Dropdown'
// import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch } from 'react-icons/ai';


export const GamesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect((() => {
    getProducts();
  }), [])

  const getProducts = () => {
    axios.get(`https://apple-cupcake-41384.herokuapp.com/games`).then((res) => {
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
          width: "100%",
          backgroundColor: "#121212",
        }}>
          <div >
            <p style={{
              textAlign: "left",
              marginLeft: "11%",
              fontSize: "22px",
              fontWeight: "400",
              color: "white",
              paddingTop: "2%",
              fontFamily: "Brutal, sans-serif"
              // border: "1px solid blue"
              // lineHeight:"25px"

            }}> Popular Genres</p>

          </div>
        </div>
        <div style={{
          width: "85%",
          height: "277px",
          // border: "1px solid red",
          display: "flex",
          marginLeft: "9%",
          paddingBottom: "5%",

          // backgroundColor:"#121212"

        }}>
          <div style={{
            width: "22%",
            // border: "1px solid blue",
            // paddingRight:"10px"
            margin: "1%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",


          }}>
            <div style={{
              width: "100%",
              height: "100%",
              // border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="\head6.jpg" alt="not found" style={{
                margin: "auto",
                marginTop: "4%",
                width: "90%",
                height: "95%",

                // marginRight:"5px"
                borderRadius: "5px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div className="ahoverhead" style={{
              height: "40%",
              // border: "1px solid yellow",
              paddingTop: "5%",
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




              }}>Action Games</p>
            </div>
          </div>
          <div style={{
            width: "22%",
            // border: "1px solid blue",
            // paddingRight:"10px"
            margin: "1%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",


          }}>
            <div style={{
              width: "100%",
              height: "100%",
              // border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="https://wallpapercave.com/wp/wp7164618.jpg" alt="not found" style={{
                margin: "auto",
                marginTop: "4%",
                width: "90%",
                height: "95%",

                // marginRight:"5px"
                borderRadius: "5px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div className="ahoverhead" style={{
              height: "40%",
              // border: "1px solid yellow",
              paddingTop: "5%",
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




              }}> Horror Games</p>
            </div>
          </div>

          <div style={{
            width: "22%",
            // border: "1px solid blue",
            // paddingRight:"10px"
            margin: "1%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",


          }}>
            <div style={{
              width: "100%",
              height: "100%",
              // border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Spelldrifter_FreeRangeGames_S1_2560x1440-352ef2771d0e47b849b948dc1299214c" alt="not found" style={{
                margin: "auto",
                marginTop: "4%",
                width: "90%",
                height: "95%",

                // marginRight:"5px"
                borderRadius: "5px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div className="ahoverhead" style={{
              height: "40%",
              // border: "1px solid yellow",
              paddingTop: "5%",
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




              }}> RPG Games</p>
            </div>
          </div>

          <div style={{
            width: "22%",
            // border: "1px solid blue",
            // paddingRight:"10px"
            margin: "1%",
            backgroundColor: "#1f1f1f",
            borderRadius: "6px",


          }}>
            <div style={{
              width: "100%",
              height: "100%",
              // border: "1px solid red",
              // backgroundColor: "#1f1f1f"

            }}>
              <img src="data:image/jpeg;base64,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" alt="not found" style={{
                margin: "auto",
                marginTop: "4%",
                width: "90%",
                height: "95%",

                // marginRight:"5px"
                borderRadius: "5px",
                // border: "1px solid yellow"

              }} />
            </div>
            <div className="ahoverhead" style={{
              height: "40%",
              // border: "1px solid yellow",
              paddingTop: "5%",
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




              }}> Open World Games</p>
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
          marginLeft: "10% "
        }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic2" style={{
            // color: "#838282",
            // width: "200px",
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
          marginRight: "10%"
        }}>
          <p style={{
            textAlign: "left",
            color: "white",
            fontSize: "16px",
            fontWeight: "100",
            // border: "1px solid blue",
            marginTop: "10%",
            // width: "100%",
            // height: "100%"


          }}> Filters</p>
        </div>
      </div>
      <div className="amain" style={{
        // width: "100%",
        // height: "100%",
        // display: "flex",
        // border: "1px solid red"

      }}>
        <div className="games" style={{
          width: "80%",
          // border: "1px solid blue",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gridGap: "1%",

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
                    // border: "1px solid yellow",
                    textAlign: "left",
                    textDecoration: "none",
                    fontFamily: "Brutal, sans-serif"
                  }}>
                  <Link to={`/individualgame/${el._id}`} key={el._id} >
                    <div className="aimg" style={{
                      width: "100%",
                      // border: "1px solid red"
                    }}>

                      <img src={el.image} alt="err" width="100%" />
                    </div>
                  </Link>
                  <div className="atitle">
                    <p>{el.title}</p>
                    <div style={{
                      // border: "1px solid red",
                      height: "15%",
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
          width: "15%",
          // height: "500px",
          // border: "1px solid white",
          // marginLeft: "30px"
        }}>
          <div style={{
            // border: "1px solid red",
            display: "flex",

            // backgroundColor: "#202020"

          }}>

            <AiOutlineSearch className="asearchICON" />

            <div>
              <input type="text" placeholder="Keywords" style={{
                marginBottom: "15px",
                color: "white",
                backgroundColor: "#202020",
                // paddingLeft:"20px",
                width: "100%",
                border: "none"
              }} />
            </div>
          </div>
          <div>
            <div className="aline">

            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="aeventhover" style={{
                border: "none",
                textAlign: "left",
                fontFamily: "Brutal, sans-serif",
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
            <div className="aline">

            </div>


            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                fontFamily: "Brutal, sans-serif",
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

            <div className="aline">

            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                fontFamily: "Brutal, sans-serif",
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
            <div className="aline">

            </div>


            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                fontFamily: "Brutal, sans-serif",
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

            <div className="aline">

            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                fontFamily: "Brutal, sans-serif",
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
            <div className="aline">

            </div>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border: "none",
                textAlign: "left",
                fontFamily: "Brutal, sans-serif",
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
            <div className="aline">

            </div>

          </div>
        </div>
      </div>






    </>
  );
};
