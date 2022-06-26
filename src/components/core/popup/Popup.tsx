import { CSSProperties } from 'react';
import './Popup.scss';

import Button from '../button/Button';

export interface PopupCSS extends CSSProperties {
  '--width': string;
}

type Props = {
  className?: string;
  width?: string;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Popup = ({ className, width, isVisible, onClose, children }: Props) => {
  return (
    <div className={`popup ${isVisible ? 'open' : ''}`} style={{ '--width': width } as PopupCSS}>
      <div className={`popup__content ${className}`}>
        <Button
          type="button"
          hasRippleEffect={false}
          className="popup__content__close"
          onClick={onClose}
        >
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
