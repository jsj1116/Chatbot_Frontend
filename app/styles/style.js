import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#7A5ADB',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        width: '60%',
        alignItems: 'center',
    },
    buttext: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    logoutButton: {
        backgroundColor: '#E31B22',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        width: '60%',
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    mainView: {
        marginBottom: 20, 
        width: '80%'
    },
    input: {
        fontSize: 20,
        padding: 10,
        width: '100%',
        backgroundColor: '#DDDDDD',
        marginBottom: 20,
    },
    textInput: {
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 100,
        backgroundColor: '#CCCCCC'
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainText: {
        fontFamily: 'Paperlogy-7Bold',
        fontSize: 45,
        padding: 20,
        color: '#7A5ADB',
    },
}); 