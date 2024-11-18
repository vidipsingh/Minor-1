export const applyColorBlindnessFilter = (colorBlindnessType, defaultStyles) => {
  let classNames = defaultStyles;

  switch (colorBlindnessType) {
    case 'tritanopia':
      classNames += ' tritanopia';
      break;
    case 'protanopia':
      classNames += ' protanopia';
      break;
    case 'deuteranopia':
      classNames += ' deuteranopia';
      break;
    case 'grayscale':
      classNames += ' grayscale';
      break;
    case 'inverted':
      classNames += ' inverted';
      break;
    default:
      break;
  }

  return classNames;
};