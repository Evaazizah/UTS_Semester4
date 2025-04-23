import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonTop}>
                <Text style={styles.buttonText}>Tiket Pesawat</Text>
            </TouchableOpacity>

            <Image source={require('../assets/images/pesawat.png')} style={styles.pesawatImage} />
        </View>

    );

    export default App;

    
       
        
    })
}