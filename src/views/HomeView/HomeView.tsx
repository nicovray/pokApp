import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    Button,
} from 'react-native';
import { Pokemon } from '../../models/Pokemon';
import { PokemonList } from '../../data/PokemonList';

export default function HomeView() {
    const [counterPokedex, setCounterPokedex] = useState(0);

    const onPressNext = () => {
        if (counterPokedex === PokemonList.length - 1) {
            setCounterPokedex(0);
        } else {
            setCounterPokedex(counterPokedex + 1);
        };
    };
    const onPressPrevious = () => {
        if (counterPokedex === 0) {
            setCounterPokedex(PokemonList.length - 1);
        } else {
        setCounterPokedex(counterPokedex - 1);
        };
    };
    
    return (
        <View>
            <Text>Counter: {counterPokedex}</Text>
            <Button
                title="Previous"
                onPress={onPressPrevious}
            />
            <Button
                title="Next"
                onPress={onPressNext}
            />
            <PokemonInfo 
                id={PokemonList[counterPokedex].id} 
                name={PokemonList[counterPokedex].name} 
                height={PokemonList[counterPokedex].height} 
                type={PokemonList[counterPokedex].type} 
                isMale={PokemonList[counterPokedex].isMale} 
                src={PokemonList[counterPokedex].src}
            />
        </View>
    );
};

    const PokemonInfo = ({name, height, type, isMale, src}: Pokemon) => {
        return (
        <View>
            <Text>This is a Pokemon</Text>
                <Text>Its name is {name}, its height is {height} and its type is {type}.</Text>
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
        marginBottom: 50,
    }
});