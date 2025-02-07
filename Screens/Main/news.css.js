import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 16,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        color: '#fff',
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
    newsCard: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#2A2A2A',
    },
    newsImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    bookmarkText: {
        fontSize: 16,
        color: '#007BFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingottom: 16,
        marginTop: -15,
        //backgroundColor: '#121212',
        borderBottomWidth: 1,
        borderBottomColor: '#2A2A2A'
    },
    backButton: {
        padding: 8,
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E8E8E8',
    },
    contentContainer: {
        flex: 1,
        marginLeft: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E8E8E8',
        marginBottom: 8,
    },
    source: {
        fontSize: 14,
        color: '#FF5733',
        marginBottom: 8,
    },
    metaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    category: {
        fontSize: 12,
        color: '#666',
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    time: {
        fontSize: 12,
        color: '#666',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        color: '#FF5733',
        textAlign: 'center',
        padding: 16,
        fontSize: 16
    }
});

export default styles;