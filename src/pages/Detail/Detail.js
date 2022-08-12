import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../../pages/Detail/Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(Config.API_URL + '/' + id);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.price}>{data.price} TL</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
