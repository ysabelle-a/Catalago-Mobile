import { Pressable, Text } from 'react-native'
import { styles } from './styles'

interface ButtonCustomProps {
    onPress: () => void
}

export const ButtonCustom = ({
    onPress
}: ButtonCustomProps) => {

    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                Entrar
            </Text>
        </Pressable>
    )
}