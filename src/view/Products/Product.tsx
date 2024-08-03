import React from "react";
import useProductListViewModel from "../../viewsmodels/ProductListViewModel";
import { View, Text, FlatList } from "react-native";
import styles from "./ProductsStyles";

export const ProductScreen : React.FC = () => {
    const {products, loading, error } = useProductListViewModel();
    if (error){
        return <Text style={styles.error}>{error}</Text>
    }
    if (loading){

    }
    
    return(
        <View>
            <Text> Lista de Productos </Text>
            <FlatList
                data = {products}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.category}</Text>
                        <Text>{item.createAt}</Text>
                        <Text>{item.updatedAt}</Text>
                    </View>
                )}
            />
        </View>
    );
}