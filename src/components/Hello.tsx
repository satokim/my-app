import { Children } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
  bang?: boolean
}

const Hello = (props: Props): JSX.Element => {

  const { children, bang } = props

  return (
      <View>
        <Text style={styles.text}>
          Hello {children}{bang === true ? '!' : ''}
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
