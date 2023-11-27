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
    logoutButton : {
        width: 125,
        height: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#1A5EDE",
        position: 'absolute',
        bottom: 50,
        right: 25,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
    },
    logoutText: {
        color: '#fbfbfb',
        fontSize: 24,
        fontWeight: '600',
    },
});

export default Styles;