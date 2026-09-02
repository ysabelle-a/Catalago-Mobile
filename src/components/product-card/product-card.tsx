import { View, Text, Image, Pressable } from 'react-native'
import { styles } from './styles'
import { router } from 'expo-router'

interface ProductCardProps {
    id: number
    name: string
    price: number
    image: string
}

export const ProductCard = ({
    id,
    name,
    price,
    image
}: ProductCardProps) => {

    return (
      <Pressable
    style={styles.card}
    onPress={() =>
        router.push({
            pathname: '/product/[id]',
            params: {
                id: id.toString()
            }
        })
    }
>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.productName}>
                {name}
            </Text>

            <Text style={styles.productPrice}>
                {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Text>

        </Pressable>
    )
}