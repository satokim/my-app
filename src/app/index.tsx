import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View>
        <View>
          <View>
            <Text>Memo App</Text>
            <Text>Logout</Text>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>TodoList</Text>
              <Text>2024.02.03</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>TodoList</Text>
              <Text>2024.02.03</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>TodoList</Text>
              <Text>2024.02.03</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>TodoList</Text>
              <Text>2024.02.03</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index