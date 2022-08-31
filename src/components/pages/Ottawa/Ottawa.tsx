// Framework Imports
import React, { FC } from 'react'

// Component Imports
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";

// CSS Imports
import './Ottawa.less'

/**
 * This the Ottawa component.
 */
const Ottawa: FC = () => {
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
        <section className="dayWrap">
          <h3>Wed</h3>
          <section className="imgPlaceholder">
            <WiDaySunny />
          </section>
          <p>19<span>&#176;</span></p>
        </section>
        <section className="dayWrap">
          <h3>Thu</h3>
          <section className="imgPlaceholder">
            <WiDaySunny />
          </section>
          <p>19<span>&#176;</span></p>
        </section>
        <section className="dayWrap">
          <h3>Fri</h3>
          <section className="imgPlaceholder">
            <WiDaySunny />
          </section>
          <p>19<span>&#176;</span></p>
        </section>
        <section className="dayWrap">
          <h3>Sat</h3>
          <section className="imgPlaceholder">
            <WiDaySunny />
          </section>
          <p>19<span>&#176;</span></p>
        </section>
      </section>
    </section>
  )
}

export default Ottawa
