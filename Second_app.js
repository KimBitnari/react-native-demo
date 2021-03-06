import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "60b84d513e41abc91383b1ec95fa3bcf";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=-${longitude}&appid=6${API_KEY}&units=metric`
      );
      this.setState({isLoading: false, temp: data.main.temp});
      //console.log(data);
  };
  getLocation = async() => {
    try {
      //throw Error();
      await Location.requestPermissionsAsync();
      //const locaation = await Location.getCurrentPositionAsync();
      //const {coords} = await Location.getCurrentPositionAsync();
      //console.log(coords.latitude, coords.longitude);
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} />;
  }
}