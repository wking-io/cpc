import cloneDeep from 'clone-deep';

import resolveConfig from 'tailwindcss/lib/util/resolveConfig';
import defaultConfig from 'tailwindcss/stubs/defaultConfig.stub';
import customConfig from '../../../../../../../config/tailwind.config';

function getConfig(userConfig) {
  return resolveConfig([userConfig, defaultConfig]);
}

export function getFromRawConfig(keys = []) {
  return keys.reduce((val, key) => val[key], getConfig(customConfig));
}
export function getFromTheme(keys = []) {
  return keys.reduce((val, key) => val[key], getFromRawConfig(['theme']));
}
export function getFromExtend(keys = []) {
  return keys.reduce((val, key) => val[key], getFromTheme(['extend']));
}

export function getFromConfig(keys = []) {
  console.log(getFromRawConfig(['theme']));
  return keys.reduce(
    (val, key) => val[key],
    cloneDeep(
      getFromRawConfig(['theme']),
      getFromRawConfig(['theme', 'extend'])
    )
  );
}
