import React, { Component } from 'react';
import {View,Text,TouchableOpacity,ImageBackground,StyleSheet,Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <ImageBackground
                    source={require('../assets/bg_image.png')}
                    style={{
                        flex: 1,
                        width:'100%',
                        height:'100%',
                        resizeMode: "cover",
                        justifyContent: "center",
                        alignItems:'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor:'white',
                            width:'70%',
                            borderRadius:10,
                            justifyContent:'center',
                            padding:20,
                            paddingLeft:20,
                        }}
                    >
                        <Text style={{padding:10,fontSize:30,fontWeight:'bold',paddingBottom:2}}>ISS Location</Text>
                        <Text style={{padding:10,fontSize:15,color:'red'}}>{"Know More--->"}</Text>
                        <Image
                            source={require('../assets/iss_icon.png')}
                            style={{
                                resizeMode:'contain',
                                height:'100%',
                                width:'100%',
                            }}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}