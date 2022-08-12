import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import {Detail} from '../Detail/Detail';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import {useDispatch} from 'react-redux';

export const Products = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error, data} = useFetch('https://fakestoreapi.com/products');

  function detailsButton(id) {
    navigation.navigate('DetailPage', {id});
  }

  const renderProduct = ({item}) => (
    <ProductCard onclick={() => detailsButton(item.id)} product={item} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <ImageBackground
        source={'src/assets/Screen Shot 2022-07-28 at 3.16.19 PM.png'}>
        <FlatList data={data} renderItem={renderProduct} />
      </ImageBackground>
    </View>
  );
};
