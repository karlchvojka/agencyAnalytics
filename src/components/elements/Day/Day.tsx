// Framework Imports
import React from 'react'

// Component Imports
import { WiDaySunny } from "react-icons/wi";

// CSS Imports
import './Day.less'

// Variable Declarations
type DayProps = {
  day: string;
  temp: number;
  forecast: string;
}

/**
 * This the Day component.
 */
class Day extends React.Component<DayProps> {
  render() {
    return (
      <section className="dayWrap">
        <h3>{this.props.day}</h3>
        <section className="imgPlaceholder">
          <WiDaySunny />
        </section>
        <p>{this.props.temp}<span>&#176;</span></p>
      </section>
    );
  }
}

export default Day
