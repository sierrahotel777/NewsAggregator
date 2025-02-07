import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 16,
    },
    mainContent: {
        flex: 1,
        paddingBottom: 60,
    },
    scrollContent: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF5733',
    },
    iconlogo: {
        marginTop: 4,
        width: 25,
        height: 25,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
    },
    searchInput: {
        flex: 1,
        color: '#fff',
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    link: {
        fontSize: 14,
        color: '#FF5733',
    },
    trendingCard: {
        marginRight: 16,
        marginBottom: 150,
        width: 200,
    },
    trendingImage: {
        width: '100%',
        height: 120,
        borderRadius: 8,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    itemSource: {
        fontSize: 14,
        color: '#999',
    },
    itemCategory: {
        fontSize: 14,
        color: '#999',
    },
    itemTime: {
        fontSize: 12,
        color: '#999',
    },
    latestCard: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        elevation: 3,
    },
    latestImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 12,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingVertical: 16,
        width: '100%',
    },
    navItem: {
        fontSize: 14,
        color: '#fff',
    },
    errorText: {
        color: '#ff3131',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 14
    },
    loadingContainer: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    metaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    }
});

export default styles;