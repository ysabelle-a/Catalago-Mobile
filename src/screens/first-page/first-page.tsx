import { View, Text, Pressable, FlatList } from 'react-native'
import { styles } from './styles'
import { useState, useEffect } from 'react'
import { ProductCard } from '../../components/product-card/product-card'
import { getProducts, Product } from '../../services/products'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FirstPage = () => {

    const [category, setCategory] = useState('masculino')
    const [products, setProducts] = useState<Product[]>([])

    const filteredProducts = products.filter((product) => {
        return category === 'masculino'
            ? product.category.startsWith('mens')
            : product.category.startsWith('womens')

    })

    useEffect(() => {
        const loadProducts = async () => {
            const data = await getProducts()

            setProducts(data)
        }

        loadProducts()
    }, [])

    const handleLogout = async () => {
        await AsyncStorage.removeItem("userEmail")

        router.replace("/")
    }

    return (
        <View style={styles.container}>

            { }
            <View style={styles.header}>


                <View style={styles.categories}>

                    <Pressable
                        style={[
                            styles.categoryButton,
                            category === 'masculino' &&
                            styles.categoryButtonActive
                        ]}
                        onPress={() => setCategory('masculino')}
                    >
                        <Text
                            style={[
                                styles.categoryButtonText,
                                category === 'masculino' &&
                                styles.categoryButtonActiveText
                            ]}
                        >
                            Produtos Masculinos
                        </Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.categoryButton,
                            category === 'feminino' &&
                            styles.categoryButtonActive
                        ]}
                        onPress={() => setCategory('feminino')}
                    >
                        <Text
                            style={[
                                styles.categoryButtonText,
                                category === 'feminino' &&
                                styles.categoryButtonActiveText
                            ]}
                        >
                            Produtos Femininos
                        </Text>
                    </Pressable>

                </View>

            </View>

            { }
            <FlatList
                data={filteredProducts}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard
                        id={item.id}
                        name={item.title}
                        price={item.price}
                        image={item.thumbnail}
                    />
                )}

                ListFooterComponent={
                    <Pressable
                        style={styles.logoutButton}
                        onPress={handleLogout}
                    >
                        <Text style={styles.logoutText}>
                            Sair da conta
                        </Text>
                    </Pressable>
                }
            />

        </View>
    )
}