import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/GamesPage.css";

import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

export const GamesPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get(`https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=16`).then((res) => {
      console.log("res", res.data);
      setProducts(res.data);
    })
  }

  useEffect((() => {
    getProducts();
  }), [])

  return (
    <>
    <div style={{
      backgroundColor:"black",
      border:"none"

    }}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
          color: "white",
          width:"100px",
          height:"50px",
          backgroundColor:"black",
          marginLeft:"11%"
        }}>
          
          Sort By:
        </Dropdown.Toggle>

        <Dropdown.Menu style={{
          backgroungColor:"black"
        }}>
          <div className="ablack">
          <Dropdown.Item  href="#/action-1"> Spring Sales</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Square Enix Sales</Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div className="main" style={{
        width: "1500px",
        height: "100%",
        display: "flex",
        // border: "1px solid red"

      }}>
        <div className="games" style={{
          width: "950px",
          height: "1500px",
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

                <div key={el.id}
                  className="container" style={{
                    backgroundColor: "black",
                    color: "white",
                    marginTop: "10px",
                    // border: "1px solid yellow"

                  }}>
                  <div className="aimg" style={{
                    width: "100%",
                    height: "300px",
                    // border: "1px solid red"
                  }}>

                    <img src={el.images[0].imageUrl} alt="err" height="300px" width="100%" />
                  </div>
                  {el.name}
                 <p> {el.price}</p>



                </div>

              );
            })}
          </>
        </div>
        <div className="aj" style={{
          width: "250px",
          height: "500px",
          // border: "1px solid blue"
        }}>
          <div>
            <p style={{
              color:"white",
              // padding:"10px",
              paddingLeft:"10px",
              
            

            }}>Filters</p>
            <input type="text" placeholder="Keywords" style={{
              marginBottom:"10px",
              padding:"10px",
              color: "white",
              backgroundColor:"gray"
            }} />
          </div>
          <div>
        <div className="aline" style={{
          borderTop:"0.5px solid gray",
        }}>

        </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border:"none",
                textAlign:"left",
                padding: "20px",
                fontFamily:"Brutal, sans-serif",
                fontSize:"12px",
                fontWeight:"500",
                color: "rgb(245, 245, 245)"
              }}>
                EVENTS
              </Dropdown.Toggle>

              <Dropdown.Menu className="aright">
                <Dropdown.Item href="#/action-1"> Spring Sales</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Square Enix Sales</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="aline" style={{
          borderTop:"0.5px solid gray",
        }}>

        </div>
        
        
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border:"none",
                textAlign:"left",
                padding: "20px",
                fontFamily:"Brutal, sans-serif",
                fontSize:"12px",
                fontWeight:"500",
                color: "rgb(245, 245, 245)"
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
          borderTop:"0.5px solid gray",
        }}>

        </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border:"none",
                textAlign:"left",
                padding: "20px",
                fontFamily:"Brutal, sans-serif",
                fontSize:"12px",
                fontWeight:"500",
                color: "rgb(245, 245, 245)"
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
          borderTop:"0.5px solid gray",
        }}>

        </div>


            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border:"none",
                textAlign:"left",
                padding: "20px",
                fontFamily:"Brutal, sans-serif",
                fontSize:"12px",
                fontWeight:"500",
                color: "rgb(245, 245, 245)"
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
          borderTop:"0.5px solid gray",
        }}>

        </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border:"none",
                textAlign:"left",
                padding: "20px",
                fontFamily:"Brutal, sans-serif",
                fontSize:"12px",
                fontWeight:"500",
                color: "rgb(245, 245, 245)"
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
          borderTop:"0.5px solid gray",
        }}>

        </div>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                border:"none",
                textAlign:"left",
                padding: "20px",
                fontFamily:"Brutal, sans-serif",
                fontSize:"12px",
                fontWeight:"500",
                color: "rgb(245, 245, 245)"
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
          borderTop:"0.5px solid gray",
        }}>

        </div>

          </div>
        </div>
      </div>




      

    </>
  );
};



// Font name: Brutal, sans-serif

// Font size: 11px

// Font weight: 500

// Line height: 17.875px

// Font color: rgb(245, 245, 245)