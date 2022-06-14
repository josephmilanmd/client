import React, { useState } from 'react';
import './SlideTab.scss';

import Button from '../button/Button';

type Props = {
  tabHeader: string[];
  children: React.ReactNode[];
};

const SlideTab = ({ tabHeader, children }: Props) => {
  const [selected, setSelected] = useState(0);

  const onChoose = (choice: number) => {
    setSelected(choice);
  };

  return (
    <div className="slide-tab">
      <div className="slide-tab__choice">
        <span
          className="slide-tab__choice__slide-select"
          style={{
            width: `${100 / tabHeader.length}%`,
            left: `${(100 / tabHeader.length) * selected}%`
          }}
        ></span>
        {tabHeader &&
          tabHeader.length &&
          tabHeader.map((choice, index) => (
            <Button
              key={index}
              hasRippleEffect={false}
              onClick={() => onChoose(index)}
              className={`slide-tab__choice__button ${selected === index ? 'selected' : ''}`}
            >
              {choice}
            </Button>
          ))}
      </div>
      <div className="slide-tab__content" style={{ width: `${tabHeader.length * 100}%` }}>
        {children.map((child, index) => (
          <div
            key={index}
            className="slide-tab__content__item"
            style={{
              width: `${100 / tabHeader.length}%`,
              ...(index === 0 && { marginLeft: `-${(100 / tabHeader.length) * selected}%` })
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideTab;
