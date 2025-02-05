import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#333',
        paddingBottom: 5,
        zIndex: 1000,
    },
    navItem: {
        fontSize: 12,
        color: '#fff',
        marginTop: 4,
    },
    activeNavItem: {
        color: '#FF5733',
    }
});

export default styles;