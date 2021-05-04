import React, {Fragment, useRef, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigation';
import Login from '../Screens/Authen/Login';
import TimeTable from '../Screens/Menu/TimeTable/TimeTable';

import Curriculum from '../Screens/Menu/Curriculum/Curriculum';
import Evaluate from '../Screens/Menu/Evaluate/Evaluate';
import ExamCalendar from '../Screens/Menu/ExamCalendar/ExamCalendar';
import Finace from '../Screens/Menu/Finace/Finace';
import Graduation from '../Screens/Menu/Graduation/Graduation';
import RegisterSubject from '../Screens/Menu/RegisterSubject/RegisterSubject';
import Servey from '../Screens/Menu/Servey/Servey';
import ResultGrade from '../Screens/Menu/ResultGrade/ResultGrade';

import * as ScreenName from './ScreenNames';

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
      headerMode={'none'}
      initialRouteName={ScreenName.LOGINSCREEN}>
      <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
      <Stack.Screen name={ScreenName.TABBAR} component={TabNavigator} />
      <Stack.Screen name={ScreenName.TIMETABLE} component={TimeTable} />

      <Stack.Screen name={ScreenName.CURRICULUM} component={Curriculum} />
      <Stack.Screen name={ScreenName.EVALUATE} component={Evaluate} />

      <Stack.Screen name={ScreenName.EXAMCALENDAR} component={ExamCalendar} />
      <Stack.Screen name={ScreenName.FINACE} component={Finace} />

      <Stack.Screen name={ScreenName.GRADUATION} component={Graduation} />
      <Stack.Screen
        name={ScreenName.REGISTERSUBJECT}
        component={RegisterSubject}
      />

      <Stack.Screen name={ScreenName.SERVEY} component={Servey} />
      <Stack.Screen name={ScreenName.RESULTGRADE} component={ResultGrade} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
