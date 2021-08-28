import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    appIconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appIcon: {
        width: '20%',
        height: '20%',
    },
    loginMethodContainer: {
        padding: 25,
        paddingBottom: 60,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    cardFlat: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: -40
    },
    containerCard: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 40
    },
    nameWallet: {
        color: '#fff',
        fontSize: 23,
        paddingHorizontal: 40
    },
    balanceWallet: {
        color: '#fff',
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold'
    },
    logoSwpper: {
        width: 60,
        height: 60,
        marginTop: 10,
        marginLeft: 110
    },
    optionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    chartsText: {
        fontSize: 15,
        color: '#aaa',
        fontWeight: 'bold'
    },
    seeAllText: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    }
});
