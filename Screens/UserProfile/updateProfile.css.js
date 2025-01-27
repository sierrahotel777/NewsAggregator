import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    headerButton: {
        padding: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
    profileImageSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    editImageButton: {
        position: 'absolute',
        bottom: 0,
        right: '30%',
        backgroundColor: '#ffffff',
        padding: 8,
        borderRadius: 20,
    },
    form: {
        width: '100%',
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        color: '#ffffff',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#2e2e2e',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
});

export default styles;
