'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var color = exports.color = {
  primary: '#272E5A',
  secondary: '#D67445',
  paper: '#FFFFFF',
  text: '#131534',
  paperInverted: '#272E5A',
  textInverted: '#FFFFFF',
  grey: '#A0A0A0'
};

var spacing = exports.spacing = {
  verticalSmall: 5,
  vertical: 10,
  verticalBig: 20,
  horizontalSmall: 5,
  horizontal: 10,
  horizontalBig: 20,
  lineHeight: 20
};

var font = exports.font = {
  text: '"Genster-Montserrat", sans-serif',
  size: {
    title: '7.333333rem',
    heading: '3rem',
    subHeading: '2rem',
    textBig: '1.466rem',
    text: '1.2rem',
    textSmall: '1rem'
  },
  weight: {
    title: 300,
    heading: 500,
    text: 300,
    textSmall: 500,
    navigation: 300,
    light: 100
  }
};

var responsive = exports.responsive = {
  desktop: '1200px',
  tablet: '992px',
  phoneLandscape: '768px',
  phone: '480px'
};

exports.default = {
  color: color,
  spacing: spacing,
  font: font,
  responsive: responsive
};