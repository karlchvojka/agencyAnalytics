// Framework Imports
import React from 'react'

// Component Imports
import Day from 'elements/Day/Day'
import WeatherIco from 'elements/WeatherIcon/WeatherIcon';

// Helper Imports
import { FetchWeather } from 'src/helpers/FetchWeather.js'

// CSS Imports
import './Tokyo.less'

// Type Declarations
interface DayItem {
  dt?: string;
  temp?: {
    day?: number
  };
  weather?: Array<WeatherItem>;
}

interface WeatherItem {
  description?: string;
}

interface CityState {
  current: {
    dt?: number;
    temp?: number;
    weather?: Array<WeatherItem>;
  }; 
  daily: DayItem[];
}

interface Props {}

/**
 * This the Tokyo component.
 */
class Tokyo extends React.Component<Props, CityState> {
  // State Declarations
  constructor(props: Props) {
    super(props);
    this.state = {
      current: {},
      daily: []
    }
  }
  
  // Component process
  componentDidMount() {
    FetchWeather('35.6762', '139.6503').then(response => {
      this.setState({
        current: response.data.current,
        daily: response.data.daily
      });
    });
  }

  render() {
    return (
      Object.keys(this.state.current).length > 0 ?
      <section className="tokyoWrap">
        <section className="todayWrap">
          <h1>Today</h1>
          <section className="todayInner">
            <section className="todayInnerLeft">
            <WeatherIco
              current={this.state.current.weather[0].description}
              place={'current'}
              />
            </section>
            <section className="todayInnerRight">
              <section className="innerRightTop">
                <p>{Math.round(this.state.current.temp)}<span>&#176;</span></p>
              </section>
              <section className="innerRightBottom"></section>
                <h2>Clouds</h2>
            </section>
          </section>
        </section>
        <section className="forecastWrap">
          {
            this.state.daily.slice(1, 5).map((day: DayItem, index) => {
              return <Day
                day={day.dt}
                key={day.dt}
                temp={day.temp.day}
                forecast={day.weather[0].description}
              />
            })
          }
        </section>
      </section>
      :
      <h2>Loading...</h2>
    );
  }
}

export default Tokyo
