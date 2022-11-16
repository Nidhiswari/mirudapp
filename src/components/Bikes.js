import React, { useState } from "react";
import "./Bikes.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import BikesList from "./BikesList";
import NoResults from "./NoResults";
import CancelIcon from "@material-ui/icons/Cancel";

const avail_bikes = [];
avail_bikes[0] = {
  bikeName: "SPEED TRIPLE 1200 RR",
  price: "$20,950.00",
  img: "https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/roadsters-supersports/my22/speed%20triple%202022/base%20images/red%20hopper-storm%20grey/speed-triple-1200-rr-red-hopper-storm-grey-promo-955x537.jpg",
  bikeInfo:
    "As stunning to look at as it is exhilarating to ride, with the highest specification ever.",
  buy: "https://www.triumphmotorcycles.com/motorcycles/roadsters/speed-triple-1200-rr/speed-triple-1200-rr",
};

avail_bikes[1] = {
  bikeName: "SPEED TRIPLE 1200 RR BOND EDITION",
  price: "$24,995.00",
  img: "https://static.autox.com/uploads/2022/10/Triumph-Speed-Triple-1200-RR-Bond-Edition-Side-View.jpg",
  bikeInfo:"Only 60 Speed Triple 1200 RR Bond Editions are available worldwide.",
  buy: "https://www.triumphmotorcycles.com/motorcycles/roadsters/speed-triple-1200-rr/bond-limited-edition"
    };

avail_bikes[2] = {
  bikeName: "CRYSTAL WHITE STORM GREY",
  price: "$20,950.00",
  img: "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/54/35/543511AD-DBE5-4468-92B3-17746AE6FDC4.jpg",
  bikeInfo:"Optimized Cornering ABS and switchable Optimized Cornering Traction Control (with IMU), Front Wheel Lift Control, Cruise Control",
  buy: "https://www.triumphmotorcycles.com/motorcycles/roadsters/speed-triple-1200-rr/speed-triple-1200-rr",
};



function Bikes() {
  const [search, setsearch] = useState("");
  const [results, setresults] = useState(false);
  const [resultsArray, setresultsarray] = useState([]);
  const [noresultpage, setnoresultpage] = useState(false);

  const bikeResults = (name) => {
    let arr = [];
    if (name === "") {
      setresults(false);
      return alert("Enter some text to start your search!");
    }
    setresultsarray([]);
    avail_bikes.map((e, i) => {
      let str = e.bikeName.toLowerCase();
      name = name.toLowerCase();
      arr.push(str.match(name));
      if (str.match(name) !== null) {
        setresultsarray((previousResults) => [...previousResults, e]);
        if (i === avail_bikes.length - 1) {
          if (arr.every((element) => element === null)) {
            return setnoresultpage(true);
          } else return setnoresultpage(false);
        }

        return setresults(true);
      } else {
        if (i === avail_bikes.length - 1) {
          if (arr.every((element) => element === null)) {
            return setnoresultpage(true);
          } else return setnoresultpage(false);
        } else {
          return "";
        }
      }
    });
  };

  return (
    <div className="bikes">
      <div className="search_sect">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          placeholder="Search"
        />
        <SearchRoundedIcon
          onClick={() => {
            bikeResults(search);
          }}
          className="search_icon"
        />
        {results ? (
          <CancelIcon
            className="cancel_icon"
            onClick={() => {
              setsearch("");
              setresults(false);
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="bikes_sect">
        {noresultpage ? <NoResults /> : ""}
        {results ? (
          <BikesList avail_bikes={resultsArray} />
        ) : (
          <BikesList avail_bikes={avail_bikes} />
        )}
      </div>
    </div>
  );
}

export default Bikes;