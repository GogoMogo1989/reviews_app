import React, {useState} from "react";
import {  View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyle } from "../styles/global";

export default function Home ({navigation}) {

    const [reviews, setReviews] = useState([
        { 
          title: 'The Legend of Zelda', 
          body: 'An epic adventure through Hyrule.', 
          rating: 5, 
          key: '1' 
        },
        { 
          title: 'Super Mario Odyssey', 
          body: 'A fun and creative journey with Mario.', 
          rating: 4, 
          key: '2' 
        },
        { 
          title: 'Minecraft', 
          body: 'A sandbox game that fuels creativity.', 
          rating: 5, 
          key: '3' 
        },
        { 
          title: 'Fortnite', 
          body: 'A battle royale game with exciting gameplay.', 
          rating: 3, 
          key: '4' 
        },
        { 
          title: 'Among Us', 
          body: 'A fun and social deduction game.', 
          rating: 4, 
          key: '5' 
        },
      ]);
      

    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }

    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>Home Screen</Text>
            <Button title='go to review screen' onPress={pressHandler}/>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',{item})}>
                        <Text style={globalStyle.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}