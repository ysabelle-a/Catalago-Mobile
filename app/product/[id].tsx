import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'
import { useEffect, useState } from 'react'
import { getProductById, Product } from '../../src/services/products'
import { styles } from './styles'

export default function ProductDetails() {

    const { id } = useLocalSearchParams<{ id: string }>()

    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {

        const loadProduct = async () => {

            const data = await getProductById(Number(id))

            setProduct(data)
        }

        loadProduct()

    }, [id])

    if (!product) {
        return (
            <View style={styles.loading}>
                <Text>Carregando...</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>

            <Pressable
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Text style={styles.backButtonText}>
                    ← Voltar
                </Text>
            </Pressable>

            <Image
                source={{ uri: product.thumbnail }}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>
                {product.title}
            </Text>

            <Text style={styles.price}>
                {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Text>

            <Text style={styles.brand}>
                {product.brand}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <View style={styles.infoContainer}>

                <Text style={styles.info}>
                    Avaliação: {product.rating}
                </Text>

                <Text style={styles.info}>
                    Estoque: {product.stock}
                </Text>

            </View>

        </ScrollView>
    )
}