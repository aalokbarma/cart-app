import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    homeScreen:{
        width: '100%',
        height: '100%',
        backgroundColor: "#e0e0e0",
    },
    nothingComponentContainer: {
        display: 'flex',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataText: {
        fontSize: 25,
        color: '#888',
        fontWeight: '700',
        marginVertical: 20,
    },
});

export default Styles;