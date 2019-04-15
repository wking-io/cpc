import { getFromConfig } from './utils';

const { SelectControl } = wp.components;
const margins = Object.keys(getFromConfig(['margin'])).map(x => ({
  value: x,
  label: x,
}));
const defaultOption = { value: 'default', label: 'default' };

const updateMargin = side => val =>
  setAttributes({
    margin: Object.assign(attributes.margin, { [side]: val }),
  });

const getMargins = margins =>
  [
    ['t', margins.top],
    ['r', margins.right],
    ['b', margins.bottom],
    ['l', margins.bottom],
  ].reduce(
    (acc, [pos, val]) => (val === 'default' ? acc : `${acc} m${pos}-${val}`),
    ''
  );

export default function marginSelect({
  include = {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  onChange,
  initial = 'default',
  values = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  },
}) {
  return (
    <div>
      {include.top && (
        <SelectControl
          label="Margin Top"
          value={values.top || initial}
          options={[defaultOption, ...margins]}
          onChange={onChange('top')}
        />
      )}
      {include.right && (
        <SelectControl
          label="Margin Right"
          value={values.right || initial}
          options={[defaultOption, ...margins]}
          onChange={onChange('right')}
        />
      )}
      {include.bottom && (
        <SelectControl
          label="Margin Bottom"
          value={values.bottom || initial}
          options={[defaultOption, ...margins]}
          onChange={onChange('bottom')}
        />
      )}
      {include.left && (
        <SelectControl
          label="Margin Left"
          value={values.left || initial}
          options={[defaultOption, ...margins]}
          onChange={onChange('left')}
        />
      )}
    </div>
  );
}
