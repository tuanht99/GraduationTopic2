import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Calendar() {
  return (
    <SafeAreaView style={styles.container} >
    
      <CalendarPicker  onDateChange={setSelectedStartDate} />
      
      <Text style={styles.text} >Birthday: {startDate}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
 
  
})