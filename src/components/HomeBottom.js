import React from "react";
import "./HomeBottom.css";
import HomeCard from "./HomeCard";

function HomeBottom() {
  return (
    <div className="home_bottom">
      <h2>Why Triple 1200 RR?</h2>
      <div className="home_bottom_cards">
        <HomeCard
          color="white"
          img="https://imgd.aeplcdn.com/1056x594/bikewaleimg/ec/1755/img/l/triumph-thunderbird-lt-wheels-tyres-9538.jpg?v=201711021421&q=75"
        
          title="Tuff terain tyres"
          content="We provide you with tyres made with some special fibre. Which
        gives your bike a smooth grid on any terrain you are riding it on."
        />
        <HomeCard
          color="white"
          img="https://www.picclickimg.com/A0MAAOSwckVcNMTx/Kit-4pzadesivi-antiscivolo-paratacco-Triumph-Street-Triple-RS.jpg"
          title="Gear system"
          content="We make our gear system so smooth which allows the riding the bike easily. It is made so that the  rider doesn't feels any discomfort while riding out RR"
        />
        <HomeCard
          color="white"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66MQH7UY7ODKGdHv4h-O6saGY8py1Tow_mg&usqp=CAU"
          title="Elegant look"
          content="We design each of our bikes multiple times and compare them for the best so that any customer whoever watches the bike falls in love with it. "
        />
        
      </div>
    </div>
  );
}

export default HomeBottom;