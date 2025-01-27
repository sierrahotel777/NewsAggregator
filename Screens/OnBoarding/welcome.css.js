import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    title: {
        color: '#ff3131',
        fontSize: 50,
        fontFamily: 'Apple SD Gothic Neo',
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'grey',
        fontSize: 30,
        fontWeight: 'light',
        fontFamily: 'Apple SD Gothic Neo',
    },
    buttonContainer: {
        flexDirection: 'row',
        fontSize: 50,
        gap: 10,
    },
});
