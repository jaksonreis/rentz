import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';


const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="Scheduling"
                component={Scheduling}
            />
            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
            />
            <Screen
                name="SchedulingComplete"
                component={SchedulingComplete}
            />
        </Navigator>
    )
}