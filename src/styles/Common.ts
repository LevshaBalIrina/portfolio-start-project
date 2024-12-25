import { theme } from './Theme';

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeihgt?: number;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeihgt,
  Fmax,
  Fmin,
}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeihgt || 1.2}; 
    font-size: calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );

`;
