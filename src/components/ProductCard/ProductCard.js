import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({product, onclick}) => {
  return (
    <TouchableWithoutFeedback onPress={onclick}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.title}</Text>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              marginVertical: 2.5,
            }}
          />
          <View
            style={{
              backgroundColor: 'black',
              alignSelf: 'flex-end',
              borderRadius: 10,
              borderColor: '#9f9e9e',
              marginBottom: 2.5,
              borderWidth: 1.5,
            }}>
            <Text style={styles.price}>{product.price} TL</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
