import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        //top -> bottom
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subTitle: "I feel bad too,,"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        //top -> bottom
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subTitle: "Actually, outside of the house."
    },
    Drizzle: {
        iconName: "weather-hail",
        //top -> bottom
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subTitle: "Is like rain, and moist."
    },
    Rain: {
        iconName: "weather-rainy",
        //top -> bottom
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subTitle: "For more info look outside."
    },
    Snow: {
        iconName: "weather-snowy",
        //top -> bottom
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subTitle: "Do you want to build a snowman?"
    },
    Atmosphere: {
        iconName: "weather-hail",
        //top -> bottom
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subTitle: "Atmosphere~"
    },
    Clear: {
        iconName: "weather-sunny",
        //top -> bottom
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny",
        subTitle: "Go out and take a picture."
    },
    Haze: {
        iconName: "weather-hail",
        //top -> bottom
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subTitle: "Just don't go outside."
    },
    Mist: {
        iconName: "weather-hail",
        //top -> bottom
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subTitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        //top -> bottom
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subTitle: "Wear a mask."
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient} 
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white" 
                />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 54,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});