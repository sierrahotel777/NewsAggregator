import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 10,
        zIndex: 1
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#E8E8E8',
        marginBottom: 10,
        textAlign: 'center'
    },

    otpContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20
    },

    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#444',
        borderRadius: 8,
        fontSize: 20,
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        margin: 5
    },

    verifyButton: {
        backgroundColor: '#ff3131',
        padding: 15,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
        elevation: 5
    },

    verifyButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
});
