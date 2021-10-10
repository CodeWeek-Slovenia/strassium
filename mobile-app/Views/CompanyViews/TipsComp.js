import React, { cloneElement, useState } from "react";
import { Image, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { col } from "./clr";
import MainBackground from '../CustomBackground'
import { useSelector } from "react-redux";

const textAddValue = 10;

const TipsComp = () => {
    const textAddValue = useSelector(state => state.propertyReducer.size)
    return (
        <MainBackground style={styles.container}>
            <ScrollView>
            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Avoid over-buying stock</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>Ensure that you only purchase the ingredients that you know your business will use. It can be tempting to ‘stock up’ or buy in bulk if your supplier has a good deal on, but doing so can leave you with more food than you need. And this food will only go to waste if it’s left to spoil in storage.</Text>
                 
            </View>
            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Store food correctly.</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                Make sure that your fridges and freezers are running at the right temperatures, ensure that low risk foods are always stored on higher shelves than high risk foods and keep food storage areas clean and tidy. Storing foods under the correct conditions is vital for preserving their quality and preventing pathogenic bacterial growth – both of which can quickly lead to food waste.
                </Text>
            </View>

            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Practise stock rotation regularly</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                Use the ‘FIFO’ rule – First In, First Out – when storing food and displaying food for sale. This ensures that newer stock is routinely placed behind older stock, and the older stock will always be used up first before it has chance to go to waste.
                </Text>
                 
            </View>

            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Temperature control</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                Good temperature control is essential for food safety as it prevents the growth of harmful pathogenic bacteria. It also means that food waste is less likely as the food is unable to spoil. This include cooling hot food quickly, reheating food to the correct core temperature (at least 70°C for 2 minutes), storing high risk food in fridges (1-4°C) and freezers (below -18°C), plus hot/cold holding at safe temperatures (above 63°C and below 8°C, respectively).
                </Text>
            </View>
            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Keep a stock inventory</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>To prevent waste, you should always know exactly which foods you have in stock at all times. This means keeping a detailed list of the foods in all of your storage areas, including their use-by/best-before dates, that you can easily refer to. This avoids foods getting forgotten and going to waste.
</Text>
                 
            </View>
            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Don’t Throw Your Food Away If It’s Not Expired Yet</Text>
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
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Pay attention to use-by dates</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>WRAP estimates that 21% of restaurant food waste is due to food spoilage. It’s essential that you have a reliable stock management and stock rotation system (FIFO) in place so that food doesn’t spoil or go out of date before it can be used. Use-by dates should be checked on a daily basis.
</Text>
            </View>
            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>Inspect all deliveries against the order specification</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>
                When a food delivery arrives at your restaurant, it’s important that you only accept the items that you ordered to prevent excess, wasted food. You should also reject anything with visible spoilage or damage, or anything that’s delivered at the incorrect storage temperature, as these foods will only spoil further and be thrown away later in the day.</Text>
            </View>
            <View style={styles.paragraph}>
                <Text 
style={[styles.headingText,{fontSize: 20 + textAddValue}]}>9.	Keep a close eye on portion control</Text>
                <Text style={[styles.normalText,{
        fontSize:15 + textAddValue}]}>Be wary of oversized food portions and jumbo side dishes – quality is definitely much more preferable to quantity. A 2012 study actually found that over a quarter of people leave food at the end of their meal, with chips/French fries stated as the food that is most likely to be left. The reason for this food wastage is often because customers consider fries, vegetables and salads as an extra part of their main meal that they didn’t ask for
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
    },
    normalText:{
        color: col.clrText,
        fontFamily: "Regular",
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
});

export default TipsComp;