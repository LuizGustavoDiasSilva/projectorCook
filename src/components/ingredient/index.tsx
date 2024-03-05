import { styles } from "@/app/index/styles";
import { Style } from "./style";
import { Pressable, Text, Image, PressableProps } from "react-native";

export type IngredientsProps = {
    name: string
    image: string
    selected: boolean
}

export function Ingredient({name, image, selected = false, ...rest} : IngredientsProps & PressableProps) {
    return (
        <Pressable style={Style.container} {...rest}>
            <Image />
            <Text style={Style.title}>Maça</Text>
        </Pressable>
    )
}