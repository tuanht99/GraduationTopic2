import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function CategoriesBar({ categoriesData }) {
  const [foodId, setFootId] = useState('')
  const idCateAll = ''
 console.log('categoriesData :' , categoriesData.map(i => i.name ))
  

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
       setFootId(idCateAll)
        }}
      >
        {foodId === idCateAll ? (
          <Text style={styles.textT}>Tất cả</Text>
        ) : (
          <Text style={styles.textF}>Tất cả</Text>
        )}
      </TouchableOpacity>

      {categoriesData.map(item => (
        
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            setFootId(item.id)
          }}
        >
          {foodId === item.id ? (
            <Text style={styles.textT}>{item.name}</Text>
          ) : (
            <Text style={styles.textF}>{item.name}</Text>
          )}
        </TouchableOpacity>
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textT: {
    fontSize: 20,
    marginLeft: 20,
    textDecoration: 'underline',
    color: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 1
  },
  textF: {
    fontSize: 20,
    marginLeft: 20,
    textDecoration: 'underline'
  }
})
