import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, SafeAreaView} from 'react-native';

export default function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const buttonHandlerAdd = () => {
    setData([...data, { key: text }]);

  }

  const buttonHandlerClear = () => {
    setData([]);
    
  }

  return (
    
    <View style={styles.container}>

      <View>

        <TextInput style={styles.textInput} onChangeText={text => setText(text)} />

      </View>

      <View style={styles.div}>

        <Button title='ADD' onPress={buttonHandlerAdd}>

        </Button>

        <Button title='CLEAR' onPress={buttonHandlerClear}>

        </Button>

      </View>

      <View>

        <Text style={styles.text}>
          Shopping List
        </Text>

        <SafeAreaView style={styles.list}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
  textInput: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 70
  },
  div: {
    flexDirection: 'row',
    marginBottom: 30

  },
  text: {
    color: '#0000ff',
    fontWeight: 'bold',
    fontSize: 20
  },
  list: {
    alignItems: 'center'
  }
});
