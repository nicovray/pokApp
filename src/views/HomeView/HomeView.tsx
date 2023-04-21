import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
} from 'react-native';
import { Pokemon } from '../../models/Pokemon';
import { PokemonList } from '../../data/PokemonList';

export default function HomeView() {
    return (
        <View>
            <FlatList
            data={PokemonList}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
            <PokemonInfo id={item.id} name={item.name} height={item.height} type={item.type} isMale={item.isMale} src={item.src} />
            }
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