import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { API_KEY } from '@env';
import styles from './news.css';
import Header from '../Components/header.js';
import Navigation from '../Components/navigation.js';

const TrendingNews = () => {
    const navigation = useNavigation();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getTimeAgo = (date) => {
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        return `${diffInHours}h ago`;
    };

    useEffect(() => {
        fetchTrendingNews();
    }, []);

    const fetchTrendingNews = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=world&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
            );

            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }

            if (response.data.articles) {
                const transformedData = response.data.articles
                    .filter(article => article.urlToImage)
                    .map((article, index) => ({
                        id: index + 1,
                        title: article.title || 'No Title',
                        source: article.source?.name || 'Unknown Source',
                        category: 'News',
                        time: getTimeAgo(new Date(article.publishedAt)),
                        image: article.urlToImage,
                        description: article.description || 'No description available',
                        content: article.content || 'No content available',
                        url: article.url
                    }));
                setNews(transformedData);
            }
        } catch (error) {
            setError('Failed to load news');
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

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
                <Text style={styles.headerTitle}>Trending News</Text>
            </View>

            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#FF5733" />
                </View>
            ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : (
                <FlatList
                    data={news}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.newsCard}
                            onPress={() => navigation.navigate('NewsDetail', { news: item })}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={styles.newsImage}
                            />
                            <View style={styles.contentContainer}>
                                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                                <Text style={styles.source}>{item.source}</Text>
                                <View style={styles.metaInfo}>
                                    <Text style={styles.category}>{item.category}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    onRefresh={fetchTrendingNews}
                    refreshing={loading}
                />
            )}
            <Navigation />
        </View>
    );
};

export default TrendingNews;