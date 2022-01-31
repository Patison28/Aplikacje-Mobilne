import React from 'react'
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

export const Example = () => {
  const instState = [
    {
      title: 'Code',
      isCompleted: true,
    },
    {
      title: 'Meeting with team at 9',
      isCompleted: false,
    },
    {
      title: 'Check Emails',
      isCompleted: false,
    },
    {
      title: 'Write an article',
      isCompleted: false,
    },
  ]
  const [list, setList] = React.useState(instState)
  const [inputValue, setInputValue] = React.useState('')

  const addItem = (title: string) => {
    setList([
      ...list,
      {
        title,
        isCompleted: false,
      },
    ])
  }

  const handleDelete = (index: number) => {
    const temp = list.filter((_, itemI) => itemI !== index)
    setList(temp)
  }

  const handleStatusChange = (index: number) => {
    const temp = list.map((item, itemI) => (itemI !== index ? item : { ...item, isCompleted: !item.isCompleted }))
    setList(temp)
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
          {list.map((item, itemI) => (
            <HStack
              w="60%"
              padding="5%"
              justifyContent="space-between"
              alignItems="center"
              key={item.title + itemI.toString()}
            >

              <Checkbox
                colorScheme="rgba(249.0, 214.0, 124.0, 1.0)"
                defaultIsChecked
                isChecked={item.isCompleted}
                onChange={() => handleStatusChange(itemI)}
                value={item.title}
              >
                <Text
                  fontWeight="400"
                  mx="2"
                  strikeThrough={item.isCompleted}
                  _light={{
                    color: item.isCompleted ? 'gray.400' : 'coolGray.800',
                  }}
                  _dark={{
                    color: item.isCompleted ? 'gray.400' : 'coolGray.50',
                  }}
                >
                  {item.title}
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
      <Example />
    </Center>
  </NativeBaseProvider>
)
