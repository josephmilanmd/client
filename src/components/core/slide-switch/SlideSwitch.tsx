import './SlideSwitch.scss';

import Button from '../button/Button';

type Props = {
  selected: number;
  chioceList: string[];
  onChange: (choice: number) => void;
};

const SlideSwitch = ({ selected, chioceList, onChange }: Props) => {
  return (
    <div className="slide-switch__choice">
      <span
        className="slide-switch__choice__slide-select"
        style={{
          width: `${100 / chioceList.length}%`,
          left: `${(100 / chioceList.length) * selected}%`
        }}
      ></span>
      {chioceList &&
        chioceList.length &&
        chioceList.map((choice, index) => (
          <Button
            key={index}
            hasRippleEffect={false}
            onClick={() => onChange(index)}
            className={`slide-switch__choice__button ${selected === index ? 'selected' : ''}`}
          >
            {choice}
          </Button>
        ))}
    </div>
  );
};

export default SlideSwitch;
