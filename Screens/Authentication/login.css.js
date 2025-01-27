import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#E8E8E8',
    },
    subtitle: {
        color: '#B0B0B0',
        fontSize: 18,
        fontWeight: '300',
    },
    input: {
        width: '100%',
        backgroundColor: '#1C1C1C',
        color: '#F5F5F5',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#444',
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#ff3131',
        padding: 15,
        borderRadius: 8,
        width: '50%',
        alignItems: 'center',
        marginTop: 10,
        elevation: 5,
    },
    loginButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerText: {
        color: '#A9A9A9',
        marginTop: 15,
        textAlign: 'center',
        fontSize: 14,
    },
    registerLink: {
        color: '#FF5733',
        fontWeight: 'bold',
    },
});
