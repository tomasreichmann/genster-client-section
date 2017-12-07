import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from '../constants/theme';

export default class Section extends Component {
  static propTypes = {
    children: PropTypes.any,
    inverted: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    inverted: false,
  }

  render() {
    const { children, inverted } = this.props;
    return (
      <section>
        <style jsx>{`
          section {
            background: ${inverted ? theme.color.paperInverted : theme.color.paper};
            color: ${inverted ? theme.color.textInverted : theme.color.text};
            margin: ${theme.spacing.verticalBig}px ${theme.spacing.horizontalBig * -1}px;
            padding: ${theme.spacing.verticalBig*2}px ${theme.spacing.horizontalBig}px;
          }
          ${inverted ? `
            a {
              color: ${inverted ? theme.color.textInverted : theme.color.primary};
            }
          ` : ''};
        `}</style>
        {children}
      </section>
    )
  }
}
