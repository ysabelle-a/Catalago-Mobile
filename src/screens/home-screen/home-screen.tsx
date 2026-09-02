import { useState } from "react"
import {
    View,
    Text,
    TextInput,
    ScrollView
} from "react-native"

import { styles } from './styles'
import { ButtonCustom } from "@/src/components/button-custom/button-custom"
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Home = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async () => {

        setError("")

        if (!email.trim()) {
            setError("Digite seu e-mail.")
            return
        }

        const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]*@/

        if (!emailRegex.test(email.trim())) {
            setError("Digite um e-mail válido.")
            return
        }

        if (!password.trim()) {
            setError("Digite sua senha.")
            return
        }

        if (password.length < 4) {
            setError("A senha deve ter pelo menos 4 caracteres.")
            return
        }

        await AsyncStorage.setItem(
            "userEmail",
            email.trim()
        )

        router.replace("/first-page")
    }

    return (
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
        >

            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.welcome}>
                        Bem-vindo de volta!
                    </Text>

                    <Text style={styles.subtitle}>
                        Insira seus dados para entrar na sua conta.
                    </Text>

                </View>

                {}
                <View style={styles.loginCard}>

                    <Text style={styles.label}>
                        E-mail
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={styles.label}>
                        Senha
                    </Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />

                    {error !== "" && (
                        <Text style={styles.error}>
                            {error}
                        </Text>
                    )}

                    <ButtonCustom
                        onPress={handleLogin}
                    />

                </View>

            </View>

        </ScrollView>
    )
}