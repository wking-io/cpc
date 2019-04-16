import { ColorPalette } from '@wordpress/components';

import { getFromConfig } from './utils';
import { pipe } from '../../modules/utils';

export const colors = Object.entries(getFromConfig(['colors']));

const getColor = objs => val => objs.find(([_name, color]) => color === val);

const convert = colorList =>
  colorList.map(([name, color]) => ({
    name,
    color,
  }));

export const CovenantColorPalette = ({ color, onChange }) => (
  <ColorPalette
    colors={convert(colors)}
    value={color}
    onChange={pipe(getColor(colors), onChange)}
  />
);
