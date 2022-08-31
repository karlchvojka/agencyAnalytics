// Framework Imports
import React, { FC } from 'react'

// Component Imports
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import Day from 'elements/Day/Day'

// CSS Imports
import './Ottawa.less'

/**
 * This the Ottawa component.
 */
class Ottawa extends React.Component {
  render() {
    return (
      <section className="ottawaWrap">
        <section className="todayWrap">
          <h1>Today</h1>
          <section className="todayInner">
            <section className="todayInnerLeft">
            <IconContext.Provider value={{ className: "shared-class", size: '20' }}>
              <WiDaySunny className="wi-fw" />
            </IconContext.Provider>
            </section>
            <section className="todayInnerRight">
              <section className="innerRightTop">
                <p>19<span>&#176;</span></p>
              </section>
              <section className="innerRightBottom"></section>
                <h2>Clouds</h2>
            </section>
          </section>
        </section>
        <section className="forecastWrap">
          <Day
            day='Wed'
            temp={19}
            forecast='cloudy'
          />
          <Day
            day='Thu'
            temp={22}
            forecast='cloudy'
          />
          <Day
            day='Fri'
            temp={24}
            forecast='cloudy'
          />
          <Day
            day='Sat'
            temp={26}
            forecast='cloudy'
          />
        </section>
      </section>
    );
  }
}

export default Ottawa
