import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    scroll: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    scrollContent: {
        flexGrow: 1,
    },

    container: {
        flex: 1,
        minHeight: 650,
        backgroundColor: '#ffffff',
    },

    header: {
        height: 250,
        backgroundColor: '#2867E8',
        paddingHorizontal: 24,
        paddingTop: 80,
        alignItems: 'center',
    },

    welcome: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    subtitle: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
    },

    loginCard: {
        width: '85%',
        maxWidth: 400,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 10,
        padding: 14,
        marginTop: -58,
    },

    label: {
        color: '#222222',
        fontSize: 10,
        marginBottom: 5,
        marginTop: 8,
    },

    input: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 3,
        paddingHorizontal: 8,
        fontSize: 11,
    },

    error: {
        color: '#d32f2f',
        fontSize: 11,
        marginTop: 8,
    },

})