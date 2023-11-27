import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    productCard:{
        width: '100%',
        height: 'auto',
        paddingHorizontal: 15,
        paddingVertical: 7.5,
    },
    cardContainer: {
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
    },
    leftContainer: {
        width: '30%',
        height: 150,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    rightContainer: {
        width: '70%',
        paddingHorizontal: 10,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: '600',

    },
    productDescription: {
        fontSize: 16,
        color: '#444',
        paddingVertical: 15
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    priceLabel: {
        fontSize: 18,
    },
    priceValue: {
        fontSize: 18,
        color: '#00f',
        fontWeight: '600',
        paddingLeft: 5,
    }
});

export default Styles;