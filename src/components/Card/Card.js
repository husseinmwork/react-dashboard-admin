import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import {UilTimes} from '@iconscout/react-unicons';
// import { AnimationSharedLayout } from "framer-motion";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      expanded?,
      <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />:
      <CompactCard param={props} setExpanded={() => (setExpanded = true)} />
    </div>
  );
};
//CompactCard
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

function ExpandedCard({param, setExpanded}) {
  return (
    <div className="ExpandedCard"
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
    }}
    ></div>
  )
}
export default Card;
