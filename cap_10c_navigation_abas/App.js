import React from 'react';
import Evento from './components/Eventoo';
import UsuarioGithub from './components/UsuarioGithubb';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
export default function App() {
return (
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Evento" component={Evento} />
<Tab.Screen name="Github" component={UsuarioGithub} />
</Tab.Navigator>
</NavigationContainer>
);
}