import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

export default function HomeView() {

    const name: string = 'Pikachu';
    const level: number = 15;
    const isMale: boolean = true;

    return (
        <View>
            <Text>This is a Pokemon</Text>
            <Text>His name is {name}, his level is {level}.</Text>
            {isMale ?
            <Text>This is a male</Text> 
            : 
            <Text>This is a male</Text>
            }
            <Image source={require('../assets/pikachu.png')} style={styles.imagePokemon} />
        </View>
    );
}

const styles = StyleSheet.create({
    imagePokemon: {
        width: 100,
        height: 100,
    }
});