import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //justifyContent: 'center',
        marginLeft: 10,
        marginRight: 5,
        marginTop: 20,
    },
    title: {
        fontWeight: '500',
        marginTop: 20,
    },
    info: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    picker: {
        width: 300,
        padding: 10,
        borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    label: {
        marginRight: 10,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000'
    },
    title: {
        fontWeight: '500',
        marginLeft: 5,
        marginRight: 5,
    },
    button: {
        marginBottom: 50,
    },
    header: {
        margin: 20,
        fontSize: 30,
    },
});