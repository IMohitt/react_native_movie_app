import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';
import '../global.css'
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';

const TabIcon = ({focused , icon , title} : any)=>{

    if(focused){
        return (
            <>
               <ImageBackground
                 source={images.highlight}
                 className='flex flex-row flex-1 w-full min-w-[100px] min-h-14 rounded-full justify-center items-center overflow-hidden '
               > 
                 <Image source={icon} tintColor="#000" className=' size-5'/>
                 <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>   
    
               </ImageBackground>
            </>
        )
    }
    
        return (
            <View className='size-full items-center justify-center rounded-full'>
              <Image source={icon} className='size-5' tintColor="#fff"/>
            </View>
            
        )

   
}

const layout = () => {
 
    return(
        <Tabs
           screenOptions={{
            tabBarShowLabel:false,
            tabBarIconStyle:{
                width:'100%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center'
            },
            tabBarStyle:{
                backgroundColor:'#0f0D23',
                borderRadius:50,
                marginHorizontal:20,
                marginBottom:36,
                position:'absolute',
                borderWidth:1,
                borderColor:'#0f0D23'
            }
           }}
        >
            <Tabs.Screen 
              name='index'
              options={{
                title:"Home",
                headerShown:false,
                tabBarIcon: ({focused})=>(
                    <TabIcon
                      focused={focused}
                      icon={icons.home}
                      title="Home"
                    />
                )
              }}
            />
            <Tabs.Screen 
              name='search'
              options={{
                title:"Search",
                headerShown:false,
                tabBarIcon: ({focused})=>(
                    <TabIcon
                      focused={focused}
                      icon={icons.search}
                      title="Search"
                    />
                )
              }}
            />
            <Tabs.Screen 
              name='saved'
              options={{
                title:"Saved",
                headerShown:false,
                tabBarIcon: ({focused})=>(
                    <TabIcon
                      focused={focused}
                      icon={icons.save}
                      title="Saved"
                    />
                )
              }}
            />
            <Tabs.Screen 
              name='profile'
              options={{
                title:"Profile",
                headerShown:false,
                tabBarIcon: ({focused})=>(
                    <TabIcon
                      focused={focused}
                      icon={icons.person}
                      title="Person"
                    />
                )
              }}
              
            />
        </Tabs>
    )
  
}

export default layout