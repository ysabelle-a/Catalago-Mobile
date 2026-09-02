import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    header: {
        backgroundColor: '#ffffff',
        paddingTop: 25,
    },

    categories: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },

    categoryButton: {
        flex: 1,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },

    categoryButtonActive: {
        borderBottomColor: '#2867E8',
    },

    categoryButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#222222',
        textAlign: 'center',
    },

    categoryButtonActiveText: {
        color: '#171C43',
    },

    list: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 30,
    },

    row: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    logoutButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#EF3030',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 20,
    },

    logoutText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
    },

})