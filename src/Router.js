import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Products} from './pages/Products/Products';
import {Detail} from './pages/Detail/Detail';
import {Login} from './pages/Login/Login';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './components/Loading/Loading';
import {Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name={'LoginPage'}
            component={Login}
            options={{
              title: 'Login',
              headerStyle: {backgroundColor: '#68c9f6'},
              headerTitleStyle: {color: '#fff'},
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={'ProductPage'}
            component={Products}
            options={{
              title: 'Shop Chop',
              headerStyle: {backgroundColor: '#68c9f6'},
              headerTitleStyle: {color: '#fff'},
              headerHideBackButton: true,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    dispatch({type: 'REMOVE_USER'});
                  }}>
                  <Text style={{color: '#0249b7'}}>Log-out</Text>
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name={'DetailPage'}
            component={Detail}
            options={{
              title: 'Detail',
              headerStyle: {backgroundColor: '#68c9f6'},
              headerTitleStyle: {color: '#fff'},
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default Router;
