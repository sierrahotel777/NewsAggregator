import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 16,
    },
    contentContainer: {
        flex: 1,
    },
    newsImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    contentWrapper: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E8E8E8',
        marginBottom: 12,
    },
    metaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sourceTime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    source: {
        color: '#FF5733',
        fontSize: 14,
    },
    dot: {
        color: '#666',
        marginHorizontal: 8,
    },
    time: {
        color: '#666',
        fontSize: 14,
    },
    categoryContainer: {
        marginBottom: 16,
    },
    category: {
        color: '#666',
        fontSize: 14,
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: 'flex-start',
    },
    content: {
        color: '#A9A9A9',
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 20,
    },
    bookmarkButton: {
        padding: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingottom: 16,
        marginTop:-15,
        //backgroundColor: '#121212',
        borderBottomWidth: 1,
        borderBottomColor: '#2A2A2A'
    },
    backButton: {
        padding: 8,
        marginRight: 16
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E8E8E8'
    },
    description: {
        color: '#E8E8E8',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
    },
    readMoreButton: {
        backgroundColor: '#FF5733',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    readMoreText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});