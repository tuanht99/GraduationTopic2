import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'

export function SignupPending({ navigation }) {
  return (
    <SafeAreaView>
      <Text>
        Chúc mừng bạn đã đăng ký thành công.{'\n'}
        Xin chân thành cảm ơn!
      </Text>

      <Button
        buttonColor="#E94730"
        style={{ marginTop: 20 }}
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        OK
      </Button>
    </SafeAreaView>
  )
}
