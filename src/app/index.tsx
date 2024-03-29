import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View>

        <View style={styles.header}>
          <View style={styles.headerInner}>
            <Text style={styles.headerTitle}>Memo App</Text>
            <Text style={styles.headerRight}>Logout</Text>
          </View>
        </View>

        <View>
          <View style={styles.memoListItem}>
            <View>
              <Text style={styles.memoListItemTitle}>TodoList</Text>
              <Text style={styles.memoListItemDate}>2024.02.03</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>

          <View style={styles.memoListItem}>
            <View>
              <Text style={styles.memoListItemTitle}>TodoList</Text>
              <Text style={styles.memoListItemDate}>2024.02.03</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>

          <View style={styles.memoListItem}>
            <View>
              <Text style={styles.memoListItemTitle}>TodoList</Text>
              <Text style={styles.memoListItemDate}>2024.02.03</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        </View>

      </View>

      <View style={styles.circleBtn}>
        <Text style={styles.circleBtnLbl}>+</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  circleBtn: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 }
  },
  circleBtnLbl: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40
  },
})

export default Index