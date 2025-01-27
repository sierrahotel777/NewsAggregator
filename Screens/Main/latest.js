import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './news.css';
import latestData from '../TestData/latestData.json';
import Header from '../Components/header.js';
import Navigation from '../Components/navigation.js';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const LatestPage = () => {
    Header.setTitle = 'Latest News';//NNED TO FIX
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.searchBar}>
                <TextInput placeholder="Search" placeholderTextColor="#999" style={styles.searchInput} />
            </View>
            <FlatList
                data={latestData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.newsCard}>
                        <Image source={{ uri: item.image }} style={styles.newsImage} />
                        <View flex='1'>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <View flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Text style={styles.itemSource}>{item.source}</Text>
                                <Text style={styles.itemTime}>{item.time}</Text>
                            </View>
                            <View flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Text style={styles.itemCategory}>{item.category}</Text>
                                <TouchableOpacity>
                                    <Icon name="bookmark" size={20} color="#FF5733" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
                }
            />
            < Navigation />
        </View >
    );
};

export default LatestPage;