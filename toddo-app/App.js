import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [textEntered, setTextEntered] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  // Handle change event into the TextInput component
  const onChangeHandler = (text) => setTextEntered(text);

  // Add task to tasks state
  const addTaskHandler = function () {
    if (!textEntered) {
      return Alert.alert(
        'Error 💥',
        'Please provide a task'
        /*
        [
          { text: 'accepter' },
          {
            text: 'Annuler',
            style: 'destructive',
            onPress: () => console.log('Say hello'),
          },
        ]
        */
      );
    }
    setTasks([...tasks, textEntered]);
    setTextEntered('');
    modalVisibleHandler();
  };

  const deleteTaskHandler = function (index) {
    const copyTasks = [...tasks];

    copyTasks.splice(index, 1);

    setTasks(copyTasks);
  };

  const modalVisibleHandler = () =>
    setModalVisible(!modalVisible);

  return (
    <View style={styles.container}>
      {/* Input */}
      <View style={styles.inputContainer}>
        {/* */}

        <Button
          title="Add a new task"
          onPress={modalVisibleHandler}
          color={'#FFBD59'}
        />
      </View>

      {/* Modal */}
      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.image}
          />

          <TextInput
            placeholder="Enter your task"
            placeholderTextColor={'#fff'}
            style={styles.input}
            onChangeText={onChangeHandler}
            value={textEntered}
          />

          <View style={styles.buttonContainer}>
            <Button
              onPress={addTaskHandler}
              title="Add task..."
              color={'#FFBD59'}
            />
            <View style={styles.spacer} />
            <Button
              title="Cancel"
              onPress={modalVisibleHandler}
            />
          </View>
        </View>
      </Modal>

      {/* Show list tasks */}
      <View style={styles.tasksContainer}>
        {/*         $
        <ScrollView>
          {tasks.map(function (value, index) {
            return (
              <View
                key={index}
                style={styles.taskBackground}>
                <Text style={styles.task}>{value}</Text>
              </View>
            );
          })}
        </ScrollView>
      */}

        <FlatList
          // numColumns={2}
          // columnWrapperStyle={{paddingBottom: 100}}
          // ItemSeparatorComponent={<Text>SEPARATOR</Text>}
          // styles.taskBackground
          data={tasks}
          renderItem={function (value) {
            return (
              <Pressable
                onPress={() =>
                  deleteTaskHandler(value.index)
                }
                android_ripple={{
                  color: 'black',
                }}
                style={({ pressed }) => [
                  { opacity: pressed ? 0.6 : 1 },
                  styles.taskBackground,
                ]}>
                <Text style={styles.task}>
                  {value.item}
                </Text>
              </Pressable>
            );
          }}
          keyExtractor={(_, index) => index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5762B7',
    padding: 10,
    paddingTop: 50,
  },
  input: {
    width: '70%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
  },
  inputContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
  },
  tasksContainer: {
    flex: 2,
  },
  taskBackground: {
    backgroundColor: '#31356E',
    borderRadius: 5,
    padding: 6,
    marginBottom: 10,
    elevation: 30,
    shadowColor: '#5F64AB',
    shadowOpacity: 1,
    shadowOffset: 5,
    shadowRadius: 8,
  },
  task: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: '#5762B7',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  spacer: {
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
});
