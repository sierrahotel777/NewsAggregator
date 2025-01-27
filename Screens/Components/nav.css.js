import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    content: {
        flex: 1,
        marginBottom: 60, // Height of the navbar
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#000', // Dark background color
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#333',
        zIndex: 1000,
    },
    navItem: {
        fontSize: 16,
        color: '#FF5733',
        paddingVertical: 10,
    },
});

export default styles;