import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderTopColor: '#2A2A2A',
        height: 60
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