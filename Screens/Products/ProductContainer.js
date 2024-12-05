import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const data = require('./products.json');

const ProductContainer = () => {
    // console.log(data);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([]);
        }

    }, [])

  return (
    <View style={styles.container}>

      <Text>ProductContainer</Text>
     
        <FlatList 
            horizontal={true}
            // numColumns={2}
            data = {products}
            renderItem = {({item}) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            style={{width: "100%", backgroundColor: "pink"}}
            />
          

    </View>
  )
}

export default ProductContainer

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
})