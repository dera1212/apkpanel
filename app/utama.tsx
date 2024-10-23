import React from 'react';
import { Link, Stack } from 'expo-router';
import {View, Image, SafeAreaView, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity} from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { ThemedText } from '@/components/ThemedText';
import { Video, ResizeMode } from "expo-av";

const utama = () => {
  const video = React.useRef(null);

  return (

    <View style={{flex: 1}}>
      
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <video 
          ref={video}
          style={styles.video}
          src='https://res.cloudinary.com/dhwupzo3c/video/upload/f_auto:video,q_auto/v1/aplikasi%20react%20native%20panel%20sosmed/d8h2tkjwubjlhsf3w6wq'
          autoPlay
          controls={false}
          loop={true}
          muted={true}
        >
          
        </video>
        <View style={styles.Pembungkus}>
          <Image
              style={styles.LogoAwal}
              source={require('../assets/images/foryou.png')}
          />
        </View>
        <View style={styles.PembungkusButton}>
          <Link href="/register" style={styles.link}>
              <ThemedText style={styles.linkColor} type="link">Daftar</ThemedText>
          </Link>
          <Link href="/" style={styles.link}>
              <ThemedText style={styles.linkColor} type="link">Login</ThemedText>
          </Link>
        </View>
      </View>
    </>
    </View>
  );
}

const styles = StyleSheet.create({
    linkColor: {
      color: 'white',
      fontSize: 14,
    },
    link: {
      backgroundColor: '#ff0055',
      borderRadius: 25,
      textAlign: 'center',
      padding: 3,
      width: '50%',
      marginTop: 10,
    },
    PembungkusButton: {
      width: '100%',
      flexDirection: 'row',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      gap: 15,
      padding: 20,
    },
    LogoAwal:{
      width: 160,
      height: 70,
    },
    Pembungkus: {
      display: 'flex',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 150,
    },
    video: { 
      position: 'absolute',
      width: '110%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    h1: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'center',
      zIndex: 1,
      color: '#ff0055',
      fontFamily: 'sans-serif',
      fontSize: 30,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default utama;
