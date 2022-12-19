import * as React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View, Dimensions, Platform, Image, Text, TouchableOpacity } from 'react-native'
import styles from './map-screen.style'
import { db } from '../../services/config';
import {doc, onSnapshot} from "firebase/firestore";
import {Fragment} from "react";
import { Ionicons } from '@expo/vector-icons';
import {AdDirections} from "../../Components/atoms/AdDirections";


const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import imgBike from '../../assets/bike.png'
import imgShop from '../../assets/shop.png'
import imgUser from '../../assets/user.png'

export class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shippers: null,
            shipperId: props.route.params.shipper_id,
            location: props.route.params.locations,
            navigation: props.route.params.navigation,
        }
    }
    componentDidMount() {
        let unsubscribe;
        const get = async () => {
            const shipRef = doc(db, "shippers", this.state.shipperId);
            unsubscribe =  onSnapshot(shipRef, (querySnapshot) => {
                console.log("Current data: ", querySnapshot.data());
                this.setState({shippers: querySnapshot.data()})
                this.animate(querySnapshot.data().location.latitude, querySnapshot.data().location.longitude)

            });
        }
        get().then(r => console.log(r)).catch(e => console.log(e))
        return unsubscribe
    }

    animate = (latitude, longitude) => {
        const newCoordinate = { latitude, longitude };
        if (Platform.OS === 'android') {
            if (this.markerRef) {
                this.markerRef.animateMarkerToCoordinate(
                    newCoordinate,
                    7000
                );
            }
        } else {
            this.state.coordinate.timing(newCoordinate).start();
        }
    };
    fetchTime = (d, t, s) => {
        console.log('s', s);
        this.updateState({
            distance: d.toFixed(3),
            duration: t.toFixed(0)
        });
    };
    updateState = data => this.setState(state => ({ ...state, ...data }));

    render() {
        const {shippers, location, navigation} = this.state
        return (
            <View style={styles.container}>
                {shippers && (
                    <>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{flex: 1, position: 'absolute', zIndex: 10, top: 10, left: 10}}>
                            <Ionicons name="arrow-back-circle" size={50} color="black" />
                        </TouchableOpacity>
                        <MapView
                            style={styles.map}
                            mapType={'terrain'}
                            region={{
                                ...shippers.location,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA
                            }}
                        >
                            <Fragment>
                                <AdDirections
                                    origin={shippers.location}
                                    destination={shippers.took !== 2 ? shippers.statusShipper[shippers.took].location : location}
                                    onReady={result => {
                                        this.fetchTime(
                                            result.distance,
                                            result.duration,
                                            result.speed
                                        );
                                    }}
                                />
                                <Marker.Animated
                                    ref={el => (this.markerRef = el)}
                                    coordinate={shippers.location}
                                    anchor={{ x: 0.5, y: 0.5 }}
                                >
                                    {/*<Image source={shippers.heading > 180 ? imgShipper : imgShipper1} style={{width: 60, height: 60, transform: [*/}
                                    <Image source={imgBike} style={{width: 60, height: 60, transform: [
                                            { rotate: `${shippers.heading}deg` }
                                        ]}}/>
                                </Marker.Animated>
                                {shippers.statusShipper.map((item, index) => (
                                    index ? <Marker key={index} coordinate={shippers.statusShipper[index].location}>
                                        <Image
                                            style={{width: 60, height: 60}}
                                            source={imgShop}
                                        />
                                    </Marker> : null
                                ))}
                                <Marker coordinate={location} >
                                    <Image
                                        style={{width: 60, height: 60}}
                                        source={imgUser}
                                    />
                                </Marker>
                            </Fragment>
                        </MapView>
                    </>
                )}
            </View>
        )
    }
}
