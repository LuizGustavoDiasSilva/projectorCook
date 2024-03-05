import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

import { Ingredient } from "@/components/ingredient";
import React, { useState } from "react";

export default function Index(){
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
            <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>Descubra as receitas com os produtos que Você escolheu.</Text>

            <ScrollView contentContainerStyle={styles.ingredients}>
            {Array.from({ length:100 }).map((item, index) => (
                <Ingredient 
                key={index} 
                name="Tomate" 
                image={""} 
                selected 
                onPress={() => handleToggleSelected(String(index))}/>
            ))}
            </ScrollView>
        </View>
    )
}