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

  function AscTitle(a,b){
    if(a.title <b.title){
      return -1;
    }
    if(a.title>b.title){
      return 1;
    }
    return 0
  }

  const SortAscArticle=()=>{
    let results = products.sort(AscTitle);
    setProducts([...results])
  };

  function DescTitle(a,b){
    if(a.title <b.title){
      return 1;
    }
    if(a.title>b.title){
      return -1;
    }
    return 0
  }
  const SortDescArticle=()=>{
    let results = products.sort(DescTitle);
    setProducts([...results])
  };


  function DescPrice(a,b){
    if((+a.price-(+a.price*((+a.discount)/100))) < (+b.price-(+b.price*((+b.discount)/100)))){
      return 1;
    }
    if((+a.price-(+a.price*((+a.discount)/100))) > (+b.price-(+b.price*((+b.discount)/100)))){
      return -1;
    }
    return 0
  }
  
  const SortDescPrice=()=>{
    let results = products.sort(DescPrice);
    setProducts([...results])
  };

  function AscPrice(a,b){
    if((+a.price-(+a.price*((+a.discount)/100))) > (+b.price-(+b.price*((+b.discount)/100)))){
      return 1;
    }
    if((+a.price-(+a.price*((+a.discount)/100))) < (+b.price-(+b.price*((+b.discount)/100)))){
      return -1;
    }
    return 0
  }
  
  const SortAscPrice=()=>{
    let results = products.sort(AscPrice);
    setProducts([...results])
  };

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
              <img id="rrstaticimage" src="https://www.teahub.io/photos/full/55-558704_call-of-duty-black-ops-3-cover.jpg" alt="not found" style={{
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
              <p id="rrstaticwritten" style={{
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
              <img id="rrstaticimage" src="https://www.futuregamereleases.com/wp-content/uploads/2020/10/TheMedium-KeyArt-HD.jpg" alt="not found" style={{
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
              <p id="rrstaticwritten" style={{
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
              <img id="rrstaticimage" src="https://wallpapercave.com/wp/wp10118293.jpg" alt="not found" style={{
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
              <p id="rrstaticwritten" style={{
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
              <img id="rrstaticimage" src="https://i.ytimg.com/vi/eOiUtRF8k28/maxresdefault.jpg" alt="not found" style={{
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
              <p id="rrstaticwritten" style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Brutal, sans-serif",
                fontSize: "21px",
                // fontWeight: "400",
                // backgroundColor:"#1f1f1f",

                paddingTop: "4%"




              }}> Open World</p>
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
            }}> Sort By:</span> <span id="rnewRelease" style={{
            }}> New Release</span>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{
            backgroungColor: "#121212"
          }}>
            <div className="ablack">
              <Dropdown.Item href="#/action-1" onClick={()=>{SortAscArticle()}}>Title: A to Z</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>{SortDescArticle()}}>Title: Z to A</Dropdown.Item>
              <Dropdown.Item href="#/action-1" onClick={()=>{SortAscPrice()}}>Price: Low to High</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>{SortDescPrice()}}>Price: High to Low</Dropdown.Item>
              {/*<Dropdown.Item><button onClick={SortDescPrice}>Price:High to Low</button> </Dropdown.Item>*/}
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
          <p id="rnewRelease" style={{
            textAlign: "left",
            fontSize: "15px",
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
                    
                    // border: "1px solid yellow",
                    textAlign: "left",
                    textDecoration: "none",
                    fontFamily: "Brutal, sans-serif"
                  }}>
                  <Link to={`/individualgame/${el._id}`} key={el._id} >
                    <div className="aimg" style={{
                      width: "100%",
                      height:"72%",
                      // border: "1px solid red"
                    }}>

                      <img src={el.image} alt="err" width="100%" height="100%" />
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
                      <p className="aactualprice">₹ {el.price}</p>
                      <p className="aprice">₹ {Math.floor(el.price - el.price*((el.discount)/100))}</p>
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
