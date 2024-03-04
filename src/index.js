import ReactDOM from "react-dom";
import im1 from "./1.jpeg";
import im2 from "./2.jpeg";
import im3 from "./3.jpeg";
import im4 from "./4.webp";
import im5 from "./5.webp";
import im6 from "./6.png";
import im7 from "./7.jpeg";
import im8 from "./8.jpeg";
import im9 from "./9.jpeg";
import im10 from "./10.jpeg";
import im11 from "./11.jpeg";
import im12 from "./12.jpeg";
import im13 from "./13.webp";
import im14 from "./14.jpeg";
import im15 from "./15.jpeg";
import im16 from "./16.webp";
import im17 from "./17.webp";
import im18 from "./18.jpeg";
import im19 from "./19.webp";
import im20 from "./20.webp";
import im21 from "./21.jpeg";
import im22 from "./22.jpeg";
import "./index.css";
import React from "react";
import { render } from "@testing-library/react";
//import { test } from "./cart.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.item1 = "Samosa";
    this.price1 = 15;
    this.aval1 = "Yes";
    this.item2 = "Veg Puff";
    this.price2 = 25;
    this.aval2 = "Yes";
    this.item3 = "Litchi";
    this.price3 = 20;
    this.aval3 = "Yes";
    this.item4 = "Kurkure";
    this.price4 = 20;
    this.aval4 = "Yes";
    this.item5 = "Lays";
    this.price5 = 20;
    this.aval5 = "Yes";
    this.item6 = "Masala Puri";
    this.price6 = 60;
    this.aval6 = "Yes";
    this.item7 = "Pani Puri";
    this.price7 = 60;
    this.aval7 = "Yes";
    this.item8 = "Samosa Masala";
    this.price8 = 60;
    this.aval8 = "Yes";
    this.item9 = "Bhel Puri";
    this.price9 = 60;
    this.aval9 = "Yes";
    this.item10 = "Paneer S/W";
    this.price10 = 40;
    this.aval10 = "Yes";
    this.item11 = "Corn S/W";
    this.price11 = 40;
    this.aval11 = "Yes";
    this.item12 = "Mojito";
    this.price12 = 50;
    this.aval12 = "Yes";
    this.item13 = "Dairy Milk Silk";
    this.price13 = 80;
    this.aval13 = "Yes";
    this.item14 = "Gone Mad";
    this.price14 = 5;
    this.aval14 = "Yes";
    this.item15 = "Maggi";
    this.price15 = 30;
    this.aval15 = "Yes";
    this.item16 = "Coffee";
    this.price16 = 10;
    this.aval16 = "Yes";
    this.item17 = "Tea";
    this.price17 = 10;
    this.aval17 = "Yes";
    this.item18 = "Coke";
    this.price18 = 40;
    this.aval18 = "Yes";
    this.item6 = "Raspberry Ripple";
    this.price19 = 40;
    this.aval19 = "Yes";
    this.item20 = "Cornetto";
    this.price20 = 60;
    this.aval20 = "Yes";
    this.state = {
      order: [],
      total: 0,
    };

    this.test = this.test.bind(this);
  }
  test = (value, price) => {
    document.getElementById(
      "cart"
    ).innerHTML += `<div id="each"> ${value}</div> <br />`;

    let tot = this.state.total + price;
    //this.setState({total:tot});
    let str = "Item:" + value + "," + "Price:" + price;
    let arr = this.state.order;
    arr.push(str);
    this.setState({ total: tot, order: arr });
    console.log(this.state.total);
    document.getElementById("tot").innerHTML = `Total: ₹${tot}`;
  };

  sendData = () => {
    let custname = document.getElementById("custname").value;
    let ph = document.getElementById("custph").value;
    if (/\d/.test(custname) == true || /[a-zA-Z]/.test(ph) == true) {
      document.getElementById("custname").value = " ";
      document.getElementById("custph").value = " ";
    } else {
      const formInfo = {
        Name: custname,
        Phone: ph,
        Orders: this.state.order,
        Total: this.state.total,
      };
      alert("Submitted!!");
      this.setState({ total: 0, order: [] });
      const response = fetch("/", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formInfo),
      });
    }
  };

  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="css1.css" />
          <title>PES cafe management</title>
        </head>

        <body id="body">
          <div class="nav">
            <img src={im21} class="logo" alt=" found" />
            <div class="text">Category</div>
            <br />
            <div>
              <div class="dropdown">
                <button class="button-56">Chats</button>
                <div class="dropdown-content">
                  <button
                    onClick={(name, price) =>
                      this.test("Masala Puri", this.price6)
                    }
                    class="button-56"
                    id="order"
                  >
                    Masala Puri
                  </button>
                  <button
                    onClick={(name, price) =>
                      this.test("Pani Puri", this.price7)
                    }
                    class="button-56"
                    id="order"
                  >
                    Pani Puri
                  </button>
                  <button
                    onClick={(name, price) =>
                      this.test("Samosa Masala", this.price8)
                    }
                    class="button-56"
                    id="order"
                  >
                    Samosa Masala
                  </button>
                  <button
                    onClick={(name, price) =>
                      this.test("Bhel Puri", this.price9)
                    }
                    class="button-56"
                    id="order"
                  >
                    Bhel Puri
                  </button>
                </div>
              </div>
              <br />
              <div class="dropdown">
                <button class="button-56">Chocolates</button>
                <div class="dropdown-content">
                  <button
                    onClick={(name, price) =>
                      this.test("Dairy Milk Silk", this.price13)
                    }
                    class="button-56"
                    id="order"
                  >
                    Silk
                  </button>
                  <button
                    onClick={(name, price) =>
                      this.test("Gone Mad", this.price14)
                    }
                    class="button-56"
                    id="order"
                  >
                    Gone Mad
                  </button>
                </div>
              </div>
              <br />
              <div class="dropdown">
                <button class="button-56">Ice Creams</button>
                <div class="dropdown-content">
                  <button
                    onClick={(name, price) =>
                      this.test("Raspberry Ripple", this.price19)
                    }
                    class="button-56"
                    id="order"
                  >
                    Raspberry Ripple
                  </button>
                  <button
                    onClick={(name, price) =>
                      this.test("Cornetto", this.price20)
                    }
                    class="button-56"
                    id="order"
                  >
                    Cornetto
                  </button>
                </div>
              </div>
              <br />
              <div class="dropdown">
                <button class="button-56">Sandwiches</button>
                <div class="dropdown-content">
                  <button
                    onClick={(name, price) =>
                      this.test("Paneer S/W", this.price10)
                    }
                    class="button-56"
                    id="order"
                  >
                    Paneer S/W
                  </button>
                  <button
                    onClick={(name, price) =>
                      this.test("Corn S/W", this.price11)
                    }
                    class="button-56"
                    id="order"
                  >
                    Corn S/W
                  </button>
                </div>
              </div>
              <br />
              <div class="dropdown">
                <button class="button-56">Drinks</button>
                <div class="dropdown-content">
                  <button
                    onClick={(name, price) => this.test("Mojito", this.price12)}
                    class="button-56"
                    id="order"
                  >
                    Mojito
                  </button>
                  <button
                    onClick={(name, price) => this.test("Litchi", this.price3)}
                    class="button-56"
                    id="order"
                  >
                    Litchi
                  </button>
                  <button
                    onClick={(name, price) => this.test("Coffee", this.price16)}
                    class="button-56"
                    id="order"
                  >
                    Coffee
                  </button>
                  <button
                    onClick={(name, price) => this.test("Tea", this.price17)}
                    class="button-56"
                    id="order"
                  >
                    Tea
                  </button>
                  <button
                    onClick={(name, price) => this.test("Coke", this.price18)}
                    class="button-56"
                    id="order"
                  >
                    Coke
                  </button>
                </div>
              </div>
              <br />
              <div class="dropdown">
                <button class="button-56">Snacks</button>
                <div class="dropdown-content">
                  <button
                    onClick={(name, price) => this.test("Samosa", this.price1)}
                    class="button-56"
                    id="order"
                  >
                    Samosa
                  </button>
                  <button
                    onClick={(name, price) =>
                      this.test("Veg Puff", this.price2)
                    }
                    class="button-56"
                    id="order"
                  >
                    Veg Puff
                  </button>
                  <button
                    onClick={(name, price) => this.test("Kurkure", this.price4)}
                    class="button-56"
                    id="order"
                  >
                    Kurkure
                  </button>
                  <button
                    onClick={(name, price) => this.test("Lays", this.price5)}
                    class="button-56"
                    id="order"
                  >
                    Lays
                  </button>
                  <button
                    onClick={(name, price) => this.test("Maggi", this.price15)}
                    class="button-56"
                    id="order"
                  >
                    Maggi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="middle">
            <div class="top">
              <div class="text1">PES CAFETERIA MANAGEMENT</div>
            </div>
            <div class="items">
              <img src={im1} alt="" class="image" />

              <button
                onClick={(name, price) => this.test("Samosa", this.price1)}
                class="button-56"
                id="order"
              >
                Order {this.item1}
              </button>
              <div class="price"> Price:₹15</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im2} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Veg Puff", this.price2)}
                class="button-56"
                id="order"
              >
                Order Veg Puff
              </button>
              <div class="price">Price: ₹25</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im3} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Litchi", this.price3)}
                class="button-56"
                id="order"
              >
                Order Litchi
              </button>
              <div class="price">Price: ₹20</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im4} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Kurkure", this.price4)}
                class="button-56"
                id="order"
              >
                Order Kurkure
              </button>
              <div class="price">Price: ₹20</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im5} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Lays", this.price5)}
                class="button-56"
                id="order"
              >
                Order Lays
              </button>
              <div class="price">Price: ₹20</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im6} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Masala Puri", this.price6)}
                class="button-56"
                id="order"
              >
                <span class="large">Order Masala Puri</span>
              </button>
              <div class="price">Price: ₹60</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im7} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Pani Puri", this.price7)}
                class="button-56"
                id="order"
              >
                Order Pani Puri
              </button>
              <div class="price">Price: ₹60</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im8} alt="" class="image" />
              <button
                onClick={(name, price) =>
                  this.test("Samosa Masala", this.price8)
                }
                class="button-56"
                id="order"
              >
                <span class="large">Order Samosa Masala</span>
              </button>
              <div class="price">Price: ₹60</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im9} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Bhel Puri", this.price9)}
                class="button-56"
                id="order"
              >
                Order Bhel Puri
              </button>
              <div class="price">Price: ₹60</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im10} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Paneer S/W", this.price10)}
                class="button-56"
                id="order"
              >
                Order Paneer S/W
              </button>
              <div class="price">Price: ₹40</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im11} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Corn S/W", this.price11)}
                class="button-56"
                id="order"
              >
                Order Corn S/W
              </button>
              <div class="price">Price: ₹40</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im12} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Mojito", this.price12)}
                class="button-56"
                id="order"
              >
                Order Mojito
              </button>
              <div class="price">Price: ₹50</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im13} alt="" class="image" />
              <button
                onClick={(name, price) =>
                  this.test("Dairy Milk Silk", this.price13)
                }
                class="button-56"
                id="order"
              >
                <span class="large">Order Dairy Milk Silk</span>
              </button>
              <div class="price">Price: ₹80</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im14} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Gone Mad", this.price14)}
                class="button-56"
                id="order"
              >
                Order Gone Mad
              </button>
              <div class="price">Price: ₹5</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im15} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Maggi", this.price15)}
                class="button-56"
                id="order"
              >
                Order Maggi
              </button>
              <div class="price">Price: ₹30</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im16} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Coffee", this.price16)}
                class="button-56"
                id="order"
              >
                Order Coffee
              </button>
              <div class="price">Price: ₹10</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im17} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Tea", this.price17)}
                class="button-56"
                id="order"
              >
                Order Tea
              </button>
              <div class="price">Price: ₹10</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im18} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Coke", this.price18)}
                class="button-56"
                id="order"
              >
                Order Coke
              </button>
              <div class="price">Price: ₹40</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im19} alt="" class="image" />
              <button
                onClick={(name, price) =>
                  this.test("Raspberry Ripple", this.price19)
                }
                class="button-56"
                id="order"
              >
                <span class="large">Order Raspberry Ripple</span>
              </button>
              <div class="price">Price: ₹40</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
            <div class="items">
              <img src={im20} alt="" class="image" />
              <button
                onClick={(name, price) => this.test("Cornetto", this.price20)}
                class="button-56"
                id="order"
              >
                Order Cornetto
              </button>
              <div class="price">Price: ₹60</div>

              <div class="aval">
                Availability:<span id="span">Yes</span>
              </div>
            </div>
          </div>
          <div class="right">
            <div>
              <img src={im22} alt="" class="largeimg" />
            </div>
            <div id="tot"></div>
            <div id="cart"></div>
            <form>
              <div id="form">
                <label>
                  Name:
                  <input
                    type="text"
                    placeholder="Abcd"
                    required
                    id="custname"
                  ></input>
                </label>
              </div>
              <div id="form">
                <label>
                  Phone:
                  <input
                    type="tel"
                    name="telphone"
                    placeholder="888 888 8888"
                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    maxlength="12"
                    required
                    id="custph"
                  ></input>
                </label>
              </div>

              <div>
                <button class="button-56" onClick={() => this.sendData()}>
                  Order
                </button>
              </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
