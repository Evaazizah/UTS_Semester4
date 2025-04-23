import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonTop}>
                <Text style={styles.buttonText}>Tiket Pesawat</Text>
            </TouchableOpacity>

            <Image source={require('../assets/images/pesawat.png')} style={styles.pesawatImage} />

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonBottom}>
                    <Text style={styles.buttonText}>Sign In / Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBottom}>
                        <Text style={styles.buttonText}>Continue as guest</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

    export default App;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
        },
        pesawatImage: {
            width: 200,
            height: 200,
            resizeMode: 'contain',
            marginVertical: 20,
        },
        buttonTop:{
            backgroundColor: '#ccc',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            marginBottom: 10,
        },
        buttonRow: {
            flexDirection: 'row',
            gap: 10,
        },
        buttonBottom: {
            backgroundColor: '#ccc',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            marginHorizontal: 5,
        },
        buttonText: {
            color: '#333',
            fontWeight: 'bold',
        },
    });
    
       
        
    
