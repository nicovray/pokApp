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
            <PokemonInfo name={name} level={level} isMale={isMale} src={require('../../../assets/images/pikachu.png')}/>
            <PokemonInfo name={'Dracofeu'} level={57} isMale={true} src={require('../../../assets/images/dracofeu.png')}/>
        </View>
    );
};


    type PokemonInfoType = {
        name: string,
        level: number,
        isMale: boolean,
        src: any,
    };

    const PokemonInfo = ({name, level, isMale, src}: PokemonInfoType) => {
        return (
        <View>
            <Text>This is a Pokemon</Text>
                <Text>Its name is {name}, its level is {level}.</Text>
                {isMale ?
                <Text>This is a male</Text> 
                : 
                <Text>This is a male</Text>
                }
                <Image source={src} style={styles.imagePokemon} />
        </View>
        )
    };

const styles = StyleSheet.create({
    imagePokemon: {
        width: 200,
        height: 200,
    }
});