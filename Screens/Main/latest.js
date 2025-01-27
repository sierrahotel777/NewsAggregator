import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './news.css';
import latestData from '../TestData/latestData.json';

const LatestPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appTitle}>Latest News</Text>
                <Image source={require('../Images/logo.png')} style={styles.iconlogo} />
            </View>
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
                            <Text style={styles.itemSource}>{item.source}</Text>
                            <View flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Text style={styles.itemCategory}>{item.category}</Text>
                                <Text style={styles.itemTime}>{item.time}</Text>
                                <TouchableOpacity>
                                    <Text style={styles.bookmarkText}>🔖</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />

            <View style={styles.bottomNav}>
                <TouchableOpacity>
                    <Text style={styles.navItem}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navItem}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navItem}>Bookmark</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navItem}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LatestPage;