import React, { useState } from "react";
import AccordionData from "../../Accordion";
import { BiMinus, BiPlus } from "react-icons/bi";
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [AccordionDataUpdate, setAccordionDataUpdate] = useState(AccordionData);
  const handleToggle = (id) => {
    AccordionDataUpdate.find((item) => item.id === id).isCollapsed =
      !AccordionDataUpdate.find((item) => item.id === id).isCollapsed;
    setIsOpen(!isOpen);
    setAccordionDataUpdate([...AccordionDataUpdate]);
  };
  return (
    <div>
      <h2>
        Collapsible{" "}
        <span className="StyleFont">
          ( Can open all elements individually )
        </span>
      </h2>
      <div>
        {AccordionDataUpdate.map((item) => {
          return (
            <div key={item.id} className="accordion">
              <div
                onClick={() => handleToggle(item.id)}
                className="accordion-item"
              >
                <div className="accordion-header">
                  <h1>0{item.id}</h1>
                  <h3>{item.title}</h3>
                </div>
                <div className="accordion-actions">
                  {item.isCollapsed ? <BiMinus /> : <BiPlus />}
                </div>
              </div>
              <div
                className={`accordion-content ${
                  item.isCollapsed ? "" : "hidden-content"
                }`}
              >
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
