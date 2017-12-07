import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from '../constants/theme';

export default class List extends Component {
  static propTypes = {
    headers: PropTypes.array,
    items: PropTypes.array,
  }

  static defaultProps = {
    headers: [],
    items: [],
  }

  render() {
    const { headers, items } = this.props;
    return (
      <table>
        <style jsx>{`
          table {
            border-collapse: collapse;
          }
          th, td {
            font-size: ${theme.font.size.textSmall};
            background-color: ${theme.color.paper};
            padding: ${theme.spacing.verticalSmall}px ${theme.spacing.horizontalSmall}px;
            border-bottom: 1px solid ${theme.color.grey};
          }
          th {
            font-weight: ${theme.font.weight.text};
            font-color: ${theme.color.primary};
            text-align: left;
            vertical-align: bottom;
            border-bottom: 2px solid ${theme.color.grey};
          }
        `}</style>
        <thead>
          <tr>
            {headers.map( (header, headerIndex) => (
              <th key={headerIndex}>{header}</th>
            ) )}
          </tr>
        </thead>
        <tbody>
          {items.map( (item, itemIndex) => {
            return <tr key={itemIndex}>{item.map((column, columnIndex) => (
              <td key={columnIndex}>{column}</td>
            ) )}</tr>
          } )}
        </tbody>
      </table>
    )
  }
}
