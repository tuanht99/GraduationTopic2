import { View, Text, FlatList, Keyboard } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import ChatSample from '../Components/ChatSample'
import {
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
  setDoc
} from 'firebase/firestore'
import { db } from '../services/config'
import { useEffect } from 'react'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'

export default function ChatScreen({ route }) {
  const { chatID } = route.params
  const [chat, setChat] = useState()
  const [userID, setUserID] = useState('')
  const [message, setMessage] = useState('')

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userID1')
      if (value !== null) {
        setUserID(value)
      }
    } catch (e) {
      console.log('Can get the ID')
    }
  }

  const getChatContent = async () => {
    const unsub = onSnapshot(doc(db, 'chatting', chatID), doc => {
      setChat(doc.data())
    })
  }

  const updateMessage = async () => {
    if (chat === undefined) {
      await setDoc(doc(db, 'chatting', chatID + ''), {
        content: []
      })
    }
    const washingtonRef = doc(db, 'chatting', chatID)

    await updateDoc(washingtonRef, {
      content: arrayUnion({
        chatContent: message,
        userID: userID
      })
    })
  }

  useEffect(() => {
    getData()
    getChatContent()
  }, [])

  const renderItem = ({ item, index }) => (
    <ChatSample
      index={index}
      value={item}
      userID={userID}
      avatar={
        'https://cdn.tgdd.vn/Files/2021/12/10/1403586/hinh-anh-vai-tro-con-ga-va-nhung-dieu-ban-chua-biet-202112101447151707.jpg'
      }
    />
  )
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 11 }}>
        {chat !== undefined ? (
          <FlatList
            initialScrollIndex={chat.content.length - 1}
            inverted={true}
            style={{ padding: 10 }}
            data={[...chat.content].reverse()}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <Text>Chưa có tin nhắn nào</Text>
        )}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TextInput
          onChangeText={setMessage}
          onSubmitEditing={value => {
            if (value.nativeEvent.text.trim() !== '') {
              updateMessage()
            }
            setMessage('')
            Keyboard.dismiss()
          }}
          value={message}
          placeholder={'Nhập tin nhắn ở đây....'}
          right={
            <TextInput.Icon
              icon="send"
              color="#E94730"
              onPress={() => {
                if (message.trim() !== '') {
                  updateMessage()
                }
                setMessage('')
                Keyboard.dismiss()
              }}
              style={{ height: '100%' }}
            />
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
