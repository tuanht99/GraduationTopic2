import * as React from 'react'
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import {View, Dimensions, Platform, Image} from 'react-native'
import styles from './map-screen.style'
import {getShippers} from "../../services";
import { db } from '../../services/config';
import {collection, doc, query, onSnapshot} from "firebase/firestore";
import {Fragment} from "react";
import * as Location from 'expo-location';

import {AdDirections} from "../../Components/atoms/AdDirections";


const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import imgShipper from '../../assets/shiper.png'
import imgShop from '../../assets/shop.png'
import imgUser from '../../assets/user.png'

export class MapScreen extends React.Component {
    state = {
        shippers: null,
        location: {
            latitude: 10.950358503375979,
            longitude: 106.73584800514023
        }
    }
    componentDidMount() {
        let unsubscribe;
        const get = async () => {
            const shipRef = doc(db, "shippers", "1Xi8FCf7RzdWT48YJJCDboJUVh33");
            unsubscribe =  onSnapshot(shipRef, (querySnapshot) => {
                console.log("Current data: ", querySnapshot.data());
                this.setState({shippers: querySnapshot.data()})
                this.animate(querySnapshot.data().location.latitude, querySnapshot.data().location.longitude)

            });
        }
        get()
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
        const {shippers, location} = this.state
        return (
            <View style={styles.container}>
                {shippers !== null && <MapView
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
                            <Image source={imgShipper} style={{width: 60, height: 60, transform: [
                                    { rotate: `${shippers.heading}deg` }
                                ]}}/>
                        </Marker.Animated>
                        {shippers.statusShipper.map((item, index) => (
                            <Marker key={index} coordinate={shippers.statusShipper[index].location}>
                                <Image
                                    style={{width: 60, height: 60}}
                                    source={imgShop}
                                />
                            </Marker>
                        ))}
                        <Marker coordinate={location} >
                            <Image
                                style={{width: 60, height: 60}}
                                source={imgUser}
                            />
                        </Marker>
                    </Fragment>
                </MapView>}
            </View>
        )
    }
}