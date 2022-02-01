import React, {useEffect, useState} from 'react'
import {
  Input,
  IconButton,
  Checkbox,
  Text,
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  NativeBaseProvider,
} from 'native-base'
import { Feather, Entypo } from '@expo/vector-icons'
import TaskRequest from '../../routes/ExternalCalls/TaskRequest'

export const Example = () => {
  const [state, setState] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      const response = await TaskRequest.getClientTasks(1);
      setState(response);
    }
    fetchData();
  },[])
  console.log('statestate')
  console.log(state)
  const [inputValue, setInputValue] = React.useState('')
  const addItem = async (Name: string) => {
    const newTask = {
      Name: Name,
      ClientId: 1,
      Priority: 'testAxios'
    }
    await TaskRequest.createTask(newTask);
    const response = await TaskRequest.getClientTasks(1);
    setState(response);
  }

  const handleDelete = (index: number) => {
    const temp = state.filter((_, itemI) => itemI !== index)
    setState(temp)
  }

  const handleStatusChange = async (index: number) => {
    const elementToUpdate = state[index];
    await TaskRequest.updateTask({
        Id: elementToUpdate.Id,
        Name: elementToUpdate.Name,
        Priority: elementToUpdate.Priority,
        Done: !elementToUpdate.Done
      }
    );

    // const temp = state.map((item, itemI) => (itemI == index ? item : { ...item, Done: !item.Done }))
    setState(await TaskRequest.getClientTasks(1))
  }

  return (
    <Box>
      <Heading mb="30">To Do List</Heading>
      <VStack space={4}>
        <HStack space={2}>
          <Input
            flex={1}
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Task"
            border-style="rgb(249.0, 214.0, 124.0)"
          />
          <IconButton
            backgroundColor="#f9d67d"
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
            }
            onPress={() => {
              addItem(inputValue)
              setInputValue('')
            }}
          />
        </HStack>
        <VStack space={2}>
          {state.map((item, itemI) => (
            <HStack
              w="60%"
              padding="5%"
              justifyContent="space-between"
              alignItems="center"
              key={item.Name + itemI.toString()}
            >

              <Checkbox
                colorScheme="rgba(249.0, 214.0, 124.0, 1.0)"
                defaultIsChecked
                isChecked={item.Done}
                onChange={() => handleStatusChange(itemI)}
                value={item.Name}
              >
                <Text
                  fontWeight="400"
                  mx="2"
                  strikeThrough={item.Done}
                  _light={{
                    color: item.Done ? 'gray.400' : 'coolGray.800',
                  }}
                  _dark={{
                    color: item.Done ? 'gray.400' : 'coolGray.50',
                  }}
                >
                  {item.Name}
                </Text>
              </Checkbox>
              <IconButton
                size="sm"
                colorScheme="trueGray"
                icon={(
                  <Icon
                    as={Entypo}
                    name="minus"
                    size="xs"
                    color="trueGray.400"
                  />
                )}
                onPress={() => handleDelete(itemI)}
              />

            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  )
}

// const styles = StyleSheet.create({
//   checkboxStyle: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 2,
//     borderRadius: 4,
//     borderColor: "#089f9d67d1b2",
//     backgroundColor: "#f9d67d",
//     color: true
//   }
// });

export default () => (
  <NativeBaseProvider>
    <Center flex={1} px="3">
      <Example  />
    </Center>
  </NativeBaseProvider>
)
