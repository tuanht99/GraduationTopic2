import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#d9d9d9',
    },
    food1: {
        width: 52,
        transform: [{ translateX: -14 }],
        backgroundColor: 'red'
    },
    food2: {
        flexDirection: 'row',
        marginVertical: 14,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    food3: {
        backgroundColor: '#fefefe',
        padding: 14,
        marginTop: 14
    },
    food4: {
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});