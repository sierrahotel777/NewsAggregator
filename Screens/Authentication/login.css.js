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
        color: '#fff',
        fontSize: 18,
        fontWeight: '300',marginBottom: 10,
    },
    input: {
        width: '89%',
        backgroundColor: 'white',
        color: 'black',
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: '#444',
        fontSize: 16,
        borderRadius: 8,
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
        color: '#fff',
        marginTop: 15,
        textAlign: 'center',
        fontSize: 14,
    },
    registerLink: {
        color: '#FF5733',
        fontWeight: 'bold',
    },
});
