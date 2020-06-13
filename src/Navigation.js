import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Homescreen from './screens/Home';
import Walletscreen from './screens/Wallet';
import Payscreen from './screens/Pay';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Homescreen}
                options={{
                    title: "Início"
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Walletscreen}
                options={{
                    title: "Carteira"
                }}
            />
            <Tab.Screen
                name="Pay"
                component={Payscreen}
                options={{
                    title: "Pagamento"
                }}
            />
        </Tab.Navigator>
    );
}