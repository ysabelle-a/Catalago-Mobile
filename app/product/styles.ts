import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backButton: {
        marginTop: 30,
        marginBottom: 10,
    },

    backButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#171C43',
    },

    image: {
        width: '100%',
        height: 300,
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#171C43',
        marginTop: 20,
    },

    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#801515',
        marginTop: 10,
    },

    brand: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20,
        color: '#333',
    },

    infoContainer: {
        marginTop: 20,
        paddingBottom: 30,
    },

    info: {
        fontSize: 16,
        marginTop: 8,
        color: '#333',
         fontWeight: 'bold',
    },

})