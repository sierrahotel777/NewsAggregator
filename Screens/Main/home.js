import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './home.css';
import latestData from '../TestData/latestData.json';
import trendingData from '../TestData/trendingData.json';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../Components/navigation.js';


const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appTitle}>Daily Digest</Text>
                <Image source={require('../Images/logo.png')} style={styles.iconlogo} onPress={() => { navigation.navigate('Home') }} />
            </View>
            <View style={styles.searchBar}>
                <TextInput placeholder="Search" placeholderTextColor="#999" style={styles.searchInput} />
            </View>
            < View style={styles.section} >
                <Text style={styles.sectionTitle}>Trending News</Text>
                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => { navigation.navigate('TrendingNews') }}>See all</Text>
                </TouchableOpacity>
            </View >
            <FlatList
                data={trendingData}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.trendingCard}>
                        <Image source={{ uri: item.image }} style={styles.trendingImage} />
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemSource}>{item.source}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.itemCategory}>{item.category}</Text>
                            <Text style={styles.itemTime}>{item.time}</Text>
                        </View>
                    </View>
                )
                }
            />

            < View style={styles.section} >
                <Text style={styles.sectionTitle}>Latest</Text>
                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => { navigation.navigate('LatestNews') }}>See all</Text>
                </TouchableOpacity>
            </View >
            <FlatList
                data={latestData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.latestCard}>
                        <Image source={{ uri: item.image }} style={styles.latestImage} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemSource}>{item.source}</Text>
                            <View flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Text style={styles.itemCategory}>{item.category}</Text>
                                <Text style={styles.itemTime}>{item.time}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
            < Navigation />
        </View >
    );
};

export default Home;