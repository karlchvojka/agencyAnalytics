// Framework Imports
import React from 'react'

// Library Imports
import Moment from 'react-moment'

// Component Imports
import { WiDaySunny } from "react-icons/wi";
import WeatherIco from 'elements/WeatherIcon/WeatherIcon';

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
class Day extends React.Component<DayProps, {}> {
  render() {
    return (
      <section className="dayWrap">
        <h3><Moment format="ddd" unix>{this.props.day}</Moment></h3>
        <section className="imgPlaceholder">
          <WeatherIco
            current={this.props.forecast}
            place={'current'}
            />
        </section>
        <p>{Math.round(this.props.temp)}<span>&#176;</span></p>
      </section>
    );
  }
}

export default Day
