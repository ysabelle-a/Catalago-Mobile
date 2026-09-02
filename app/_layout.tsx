import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/use-color-scheme'

export const unstable_settings = {
    anchor: '(tabs)',
}

export default function RootLayout() {
    const colorScheme = useColorScheme()

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <Stack>

                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: '#FEF8F2'
                        }
                    }}
                />

                <Stack.Screen
                    name="first-page"
                    options={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: '#FEF8F2'
                        }
                    }}
                />

                <Stack.Screen
                    name="product/[id]"
                    options={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: '#FEF8F2'
                        }
                    }}
                />

            </Stack>

            <StatusBar style="auto" />

        </ThemeProvider>
    )
}