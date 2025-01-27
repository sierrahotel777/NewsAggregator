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
        marginBottom: 16,
    },
    newsImage: {
        width: "100%",
        height: 168,
        borderRadius: 8,
        marginRight: 12,
    },
    bookmarkText: {
        fontSize: 16,
        color: '#007BFF',
    },

});

export default styles;