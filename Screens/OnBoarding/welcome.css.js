import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, 
    },
    title: {
        color: '#ff3131',
        fontSize: 50,
        fontFamily: 'Apple SD Gothic Neo',
        fontWeight: 'bold',
        textAlign: 'center', 
        marginBottom: 10, 
    },
    subtitle: {
        color: '#fff', 
        fontSize: 24,
        fontWeight: '300', 
        fontFamily: 'Apple SD Gothic Neo',
        textAlign: 'center', 
        //marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 15, 
        justifyContent: 'center',
    },
});
