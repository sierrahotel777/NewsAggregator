import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from './home.css';
import latestData from '../TestData/latestData.json';
import trendingData from '../TestData/trendingData.json';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../Components/navigation.js';
import axios from 'axios';
import { API_URL, API_KEY } from '@env';

const Home = () => {
    const [trendingNews, setTrendingNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        Promise.all([fetchTrendingNews(), fetchLatestNews()]);
    }, []);

    const fetchTrendingNews = async () => {
        try {
            setError(null);
            setLoading(true);
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
            );

            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }

            const transformedData = response.data.articles?.map((article, index) => ({
                id: index + 1,
                title: article.title || 'No Title',
                source: article.source?.name || 'Unknown Source',
                category: 'News',
                time: getTimeAgo(new Date(article.publishedAt)),
                image: article.urlToImage || null,
                description: article.description || 'No description available',
                content: article.content || 'No content available',
                url: article.url
            })) || [];

            setTrendingNews(transformedData);
        } catch (error) {
            setError('Failed to load news');
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchLatestNews = async () => {
        try {
            setError(null);
            setLoading(true);
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=world&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
            );

            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }

            const transformedData = response.data.articles?.map((article, index) => ({
                id: `latest-${index + 1}`,
                title: article.title || 'No Title',
                source: article.source?.name || 'Unknown Source',
                category: 'Technology',
                time: getTimeAgo(new Date(article.publishedAt)),
                image: article.urlToImage || null,
                description: article.description || 'No description available',
                content: article.content || 'No content available',
                url: article.url
            })) || [];

            setLatestNews(transformedData);
        } catch (error) {
            setError('Failed to load latest news');
            console.error('Error fetching latest news:', error);
        } finally {
            setLoading(false);
        }
    };

    const getTimeAgo = (date) => {
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        return `${diffInHours}h ago`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContent}>
                <View style={styles.header}>
                    <Text style={styles.appTitle}>Daily Digest</Text>
                    <Image source={require('../Images/logo.png')} style={styles.iconlogo} onPress={() => { navigation.navigate('Home') }} />
                </View>
                <View style={styles.searchBar}>
                    <TextInput placeholder="Search" placeholderTextColor="#999" style={styles.searchInput} />
                </View>
                <View style={styles.scrollContent}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Trending News</Text>
                        <TouchableOpacity>
                            <Text
                                style={styles.link}
                                onPress={() => navigation.navigate('TrendingNews', { news: trendingNews.filter(news => news.image) })}
                            >
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {loading ? (
                        <ActivityIndicator size="large" color="#ff3131" />
                    ) : (
                        <FlatList
                            data={trendingNews.filter(news => news.image)}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.trendingCard}
                                    onPress={() => navigation.navigate('NewsDetail', { news: item })}
                                >
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.trendingImage}
                                    />
                                    <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                            onRefresh={fetchTrendingNews}
                            refreshing={loading}
                        />
                    )}

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Latest</Text>
                        <TouchableOpacity>
                            <Text style={styles.link} onPress={() => { navigation.navigate('LatestNews') }}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={latestNews.filter(news => news.image)}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.latestCard}
                                onPress={() => navigation.navigate('NewsDetail', { news: item })}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.latestImage}
                                />
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                    <Text style={styles.itemSource}>{item.source}</Text>
                                    <View style={styles.metaContainer}>
                                        <Text style={styles.itemCategory}>{item.category}</Text>
                                        <Text style={styles.itemTime}>{item.time}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        onRefresh={fetchLatestNews}
                        refreshing={loading}
                    />
                </View>
            </View>
            <Navigation />
        </SafeAreaView>
    );
};

export default Home;