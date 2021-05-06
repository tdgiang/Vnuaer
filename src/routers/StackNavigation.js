import React, {Fragment, useRef, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigation';
import Login from '../Screens/Authen/Login';

//Home
import TimeTable from '../Screens/Menu/TimeTable/TimeTable';
import Curriculum from '../Screens/Menu/Curriculum/Curriculum';
import Evaluate from '../Screens/Menu/Evaluate/Evaluate';
import ExamCalendar from '../Screens/Menu/ExamCalendar/ExamCalendar';
import Finace from '../Screens/Menu/Finace/Finace';
import Graduation from '../Screens/Menu/Graduation/Graduation';
import RegisterSubject from '../Screens/Menu/RegisterSubject/RegisterSubject';
import Servey from '../Screens/Menu/Servey/Servey';
import ResultGrade from '../Screens/Menu/ResultGrade/ResultGrade';
import Notificaiton from '../Screens/Menu/Notification/Notification';
//News
import Bustle from '../Screens/MenuNews/Bustle/Bustle';
import Job from '../Screens/MenuNews/Job/Job';
import Scholarship from '../Screens/MenuNews/Scholarship/Scholarship';
import TableNews from '../Screens/MenuNews/TableNews/TableNews';

//Account
import ChangePassword from '../Screens/MenuAccount/ChangePassword/ChangePassword';
import Feedback from '../Screens/MenuAccount/FeedBack/Feedback';
import Paper from '../Screens/MenuAccount/Paper/Paper';
import Profile from '../Screens/MenuAccount/Profile/Profile';
import Question from '../Screens/MenuAccount/Question/Question';
import Setting from '../Screens/MenuAccount/Setting/Setting';

import Intership from '../Screens/MenuNews/Job/Intership';
import JobNow from '../Screens/MenuNews/Job/JobNow';
import OverTime from '../Screens/MenuNews/Job/OverTime';
import Recruit from '../Screens/MenuNews/Job/Recruit';

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
      <Stack.Screen name={ScreenName.NOTIFICATION} component={Notificaiton} />
      <Stack.Screen name={ScreenName.BUSTLE} component={Bustle} />
      <Stack.Screen name={ScreenName.JOB} component={Job} />
      <Stack.Screen name={ScreenName.SCHOLARSHIP} component={Scholarship} />
      <Stack.Screen name={ScreenName.TABLENEWS} component={TableNews} />

      <Stack.Screen name={ScreenName.INTERSHIP} component={Intership} />
      <Stack.Screen name={ScreenName.JOBNOW} component={JobNow} />
      <Stack.Screen name={ScreenName.OVERTIME} component={OverTime} />
      <Stack.Screen name={ScreenName.RECRUIT} component={Recruit} />

      <Stack.Screen
        name={ScreenName.CHANGEPASSWORD}
        component={ChangePassword}
      />
      <Stack.Screen name={ScreenName.FEEDBACK} component={Feedback} />
      <Stack.Screen name={ScreenName.PAPER} component={Paper} />
      <Stack.Screen name={ScreenName.PROFILE} component={Profile} />
      <Stack.Screen name={ScreenName.QUESTION} component={Question} />
      <Stack.Screen name={ScreenName.SETTING} component={Setting} />
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
