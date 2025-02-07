import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './newsDetail.css';
import Header from '../Components/header.js';
import Navigation from '../Components/navigation.js';

const NewsDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { news } = route.params;

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-left" size={24} color="#E8E8E8" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.contentContainer}>
                <Image
                    source={
                        news.image ?
                            { uri: news.image } :
                            require('../TestData/Images/Icon_of_the_Seas.jpg')
                    }
                    style={styles.newsImage}
                />
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{news.title}</Text>

                    <View style={styles.metaInfo}>
                        <View style={styles.sourceTime}>
                            <Text style={styles.source}>{news.source}</Text>
                            <Text style={styles.dot}>•</Text>
                            <Text style={styles.time}>{news.time}</Text>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <Text style={styles.category}>{news.category}</Text>
                    </View>

                    <Text style={styles.description}>
                        {news.description}
                    </Text>

                    <Text style={styles.content}>
                        {news.content}
                    </Text>

                    {news.url && (
                        <TouchableOpacity
                            style={styles.readMoreButton}
                            onPress={() => Linking.openURL(news.url)}
                        >
                            <Text style={styles.readMoreText}>Read Full Article</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
            <Navigation />
        </View>
    );
};

export default NewsDetail;