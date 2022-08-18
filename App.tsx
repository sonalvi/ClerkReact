/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./cache";
import Navigation from './src/navigation'

const CLERK_FRONT_END_API_KEY = "clerk.simple.sheepdog-97.lcl.dev";

export default function App() {

  return (
    <ClerkProvider frontendApi={CLERK_FRONT_END_API_KEY} tokenCache={tokenCache}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar/>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});