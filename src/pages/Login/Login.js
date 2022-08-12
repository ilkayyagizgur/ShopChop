import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import usePost from '../../hooks/usePost/usePost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

export const Login = ({navigation}) => {
  const {data, post, loading, error} = usePost();
  const dispatch = useDispatch();
  const [loginEmail, setloginEmail] = useState(null);
  const [loginPassword, setloginPassword] = useState(null);
  const [visible, setVisible] = useState(true);
  const [myData, setMyData] = useState(true);

  const handleLogin = () => {
    post('https://fakestoreapi.com/auth/login', {
      username: loginEmail,
      password: loginPassword,
    });
  };
  if (data) {
    if (data.status === Error) {
      console.log('error');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
      navigation.navigate('ProductPage');
    }
  }

  return (
    //m38rmF$
    <SafeAreaView
      style={{
        backgroundColor: '#68c9f6',
        flex: 0.4,
        borderRadius: 30,
      }}>
      <Image
        style={styles.loginimage}
        source={require('/Users/adayagizgur/ShopChop/src/assets/2037710.png')}
      />
      <TextInput
        autoCapitalize={'words'}
        style={styles.loginemailStyle}
        placeholder={'E-mail'}
        onChangeText={value => setloginEmail(value)}
      />
      <TextInput
        autoCapitalize={'words'}
        style={styles.loginpasswordStyle}
        placeholder={'Password'}
        onChangeText={value => setloginPassword(value)}
        secureTextEntry={visible}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          if (loginEmail == null) {
            alert('Please enter your password');
          } else if (loginPassword == '') {
            alert('Please enter your password');
          } else {
            handleLogin();
          }
        }}>
        <Text style={styles.loginText}>Log-In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.accountButton}>Don't have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  loginemailStyle: {
    backgroundColor: '#fff',
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 170,
  },
  loginpasswordStyle: {
    backgroundColor: '#fff',
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 30,
  },
  loginButton: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'dodgerblue',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  accountButton: {
    height: 20,
    alignSelf: 'center',
    margin: 20,
  },
  loginimage: {
    alignSelf: 'center',
    height: 125,
    width: 125,
    marginTop: 90,
  },
});

const user = {
  address: {
    geolocation: {lat: '-37.3159', long: '81.1496'},
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {firstname: 'john', lastname: 'doe'},
  phone: '1-570-236-7033',
  __v: 0,
};
