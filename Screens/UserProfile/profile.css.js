import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 16,
    },
    header: {
        marginTop: 32,
        alignItems: 'center',
        marginBottom: 32,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    bio: {
        fontSize: 14,
        color: '#aaa',
        textAlign: 'center',
        marginVertical: 8,
    },
    editButton: {
        backgroundColor: '#FF5733',
        marginTop: 16,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    settings: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#1E1E1E',
        paddingVertical: 16,
        width: '100%',
        marginTop: 36,
    },
    settingItem: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    settingText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;
