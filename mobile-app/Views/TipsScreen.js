import React, { cloneElement, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { col } from "./clr";
import MainBackground from './CustomBackground'



const Tips = () => {
    const textAddValue = useSelector(state => state.propertyReducer.size)
    return (
        <MainBackground style={styles.container}>
            <ScrollView>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Shop Efficiently</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>Just don’t overbuy. Seriously. Buy enough to make sure they all get digested in your stomach. This food waste solution helps minimize food waste. It also keeps the numbers at the bottom of your grocery bills lower.</Text>
                 
            </View>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Freezing is not always good</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                Not everything freezes and then tastes well when reheated, especially those with high water content. It can freeze alright, but once the ice crystals are formed, unfreezing them results in limply greens that are no longer crispy to the bite.
                </Text>
            </View>

            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Be careful when storing raw meat</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                If you’re storing raw meat, be sure to take a clean paper towel and slightly wipe all over the surface to absorb all moisture. Molds form in moist surfaces more quickly than usual.
                </Text>
                 <TouchableOpacity>
                    <Text style={styles.link}>
                    link
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Use reusable food wrap</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                For meals that are supposed to be eaten during the day and there’s no room in the fridge, at least cover it with reusable food wrap. Foods left out in the open air is the best home for disease-causing pathogens!
                </Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Date Your Food</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>“How long has this thing been in here? Can I still eat it?”
Stop asking yourself these kinds of questions and start putting labels with dates of storage on them. This is one of the best food waste solutions, especially for stuff in the fridge.
You won’t have to throw away food just because you’re not sure if it’s edible or not anymore.
</Text>
                 
            </View>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Don’t Throw Your Food Away If It’s Not Expired Yet</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>“Best if Used By, Best By, Best Before” are terms that indicate a product is best to be used before that date, not the expiration date.
The product is still usable within several days after this date.
“Use By”, meanwhile, can be a little tricky to denote. While it means “throw-away” date in the EU, it conveys “still usable but tastes worse after [date]” to consumers in the U.S.
Either way, for the sake of your health, throw the product away when it’s past “Use By” date.
“Expires on” is the “deadline” for your food: after this date, the product is no longer usable.
So, by knowing your terms, you just saved quite some money and the planet.
</Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Transform Leftovers To Casseroles</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>Make yourself a new tray of casserole by adding more: bundles of veggies, put some mashed potatoes on top and sprinkle some cheese on top to bake until golden brown.
If it’s veggies, add in strips of baked chicken breasts seasoned with salt and pepper and eat as is, or with cooked rice.
Isn’t that the way the legendary pizzas were invented in the first place? The key to reducing food waste comes down to just the matter of creativity.
</Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Don’t Be Picky!</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                “This apple tastes supreme, but the core with 99% edible flesh and 2 inedible seeds seems repelling, so I’m throwing away the core.
“These strawberries’ sweetness is divine, but I’m going to cut out and discard the top with half of it being the edible flesh and the other being the stem.”
If somehow you possess one of these thoughts, you are contributing to the production of food waste more than you already are.
Remember to utilize everything, even your food. Isn’t this just a thing we all should do?</Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Composting</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>Composting is the most effective method of treating food waste, and unlike general assumption, it can happen right inside your house (or outside).
This may sound a bit creepy, raising a bunch of earthworms in a box somewhere near your kitchen, where you cook. But considering that raising these little compost makers turns out to be quite helpful in turning your life Eco-friendly, isn’t it worth the effort?
Simply go to a fish store, get a box of them, put some soil in it and start throwing in food scraps. The smaller the pieces, the quicker these worms work their magic.
Oh and don’t feed them meat (any kinds of meat), bones, fish, dairy products and oily foods as these will produce odour that attracts flies.
After just a few days, you’ll have plenty of rich soil to grow onions, potatoes or any house plants for your kitchen!
</Text>
            </View>            
            </ScrollView>
        </MainBackground>
    );
  };
const styles = new StyleSheet.create({
    container:{
        backgroundColor:col.mainColor,
        flex:1
    },
    paragraph:{
        paddingHorizontal:20,
        flex:6,
        justifyContent:"flex-start",
        marginTop:20
    },
    headingText:{
        color: '#000000',
        fontFamily:"Bold",
        fontSize: 20
    },
    normalText:{
        color: col.clrText,
        fontFamily: "Regular",
        fontSize:15
    },
    endParagraph:{
        paddingHorizontal:20,
        paddingBottom: 50,
        flex:6,
        justifyContent:"flex-start",
        marginTop:20
    },
    textContainer:{
        flex:5,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    textStyle:{
        color: col.clrText,
        fontFamily:"Bold",
        fontSize:22,
    },textSubStyle:{
        color: col.clrText,
        fontFamily:"Regular",
        fontSize:15,
        paddingTop:4
    },
    textSubStyle2:{
        color: col.clrText,
        fontFamily:"Regular",
        fontSize:20,
        paddingTop:10
    }
});

export default Tips;