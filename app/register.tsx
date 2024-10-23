import React from 'react';
import { Link, Stack } from 'expo-router';
import { View, Image, SafeAreaView, StyleSheet, ScrollView, TextInput, Text } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { ThemedText } from '@/components/ThemedText';

const register = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [uname, setUsername] = React.useState('');
  const [email, setingEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  return (

    <View style={styles.container}>
      <ScrollView>
        <>
          <Stack.Screen options={{ headerShown: false }} />

          <ThemedText style={styles.h1} type="title">Form Daftar!
          </ThemedText>

          <View style={styles.Pembungkus}>
            <Image
              style={styles.LogoRegis}
              source={require('../assets/images/fyp.png')}
            />
          </View>

          <SafeAreaView >

            <Text style={styles.label}>Nama</Text>
            <TextInput
              style={styles.input}
              placeholder="Isi nama kamu"
              onChangeText={onChangeName}
              value={name}
            />
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Isi username"
              onChangeText={setUsername}
              value={uname}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Isi email"
              onChangeText={setingEmail}
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Isi password"
              onChangeText={setPassword}
              value={password}
              returnKeyType='go'
              autoCorrect={false}
            />
            <Text style={styles.label}>No HP (Whatsapp)</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Isi nomor whatsapp"
              keyboardType="numeric"
            />
            <View style={styles.buttonDaftar}>
              <Link href="/" style={styles.link}>
                <ThemedText style={styles.linkColor} type="link">Daftar!</ThemedText>
              </Link>
            </View>
          </SafeAreaView>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  linkColor: {
    color: 'white',
    fontSize: 14,
  },
  link: {
    backgroundColor: '#ff0055',
    borderRadius: 5,
    textAlign: 'center',
    padding: 8,
  },
  buttonDaftar: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 10,
  },
  h1: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    color: '#ff0055',
    textAlign: 'center',
    marginTop: 30,
  },
  Pembungkus: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  LogoRegis: {
    width: 70,
    height: 70,
  },
  input: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    color: 'grey',
    borderColor: 'grey',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.84,
    elevation: 5,
  },
  label: {
    fontFamily: 'sans-serif',
    marginLeft: 15,
    marginTop: 5,
    marginBottom: -5,
    fontSize: 14,
    color: '#ff0055',
  },

});

export default register;
