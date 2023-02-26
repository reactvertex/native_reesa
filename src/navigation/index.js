import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import Home from '../screen/Home';
import Strategy from '../screen/StrategyPage';

const Navigation = () => {

const Stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider>
        <SafeAreaView>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Strategy" component={Strategy} />
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default Navigation;