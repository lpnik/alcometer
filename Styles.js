import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECEAEE',
        marginLeft: 10,
        marginRight: 5,
        marginTop: 20,
    },
    info: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    picker: {
        fontFamily: 'AbelRegular',
        width: 300,
        padding: 10,
        borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderStyle: 'solid',
        
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
        backgroundColor: '#844CB6'
    },
    gender: {
        flexDirection: 'column',

    },
    label: {
        fontFamily: 'AbelRegular',
        flexDirection: 'row',
        marginRight: 10,
        fontSize: 20,
        borderStyle: 'solid',
    },
    title: {
        fontFamily: 'AbelRegular',
        marginLeft: 5,
        marginRight: 5,
        fontSize: 22,
        fontWeight: '500',
        marginTop: 20,
    },
    header: {
        fontFamily: 'AbelRegular',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 65,
        fontWeight: '500',
        color: '#844CB6',
    },
    risk: {
        fontFamily: 'AbelRegular',
        margin: 20,
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '500',
        textShadowColor:'#2B2231',
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:10,
        

    },
});