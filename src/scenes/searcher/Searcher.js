import React from 'react'
import {
  Select,
  VStack,
  Heading,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Input,
  FormControl,
  Divider, Flex, Text,
} from 'native-base'

export const Example = () => {
  const [service, setService] = React.useState('')
  return (
    <VStack alignItems="center" space={4}>
      <Heading fontWeight="bold" fontSize="20" mb="30">Wyszukaj</Heading>
      <Flex bg="#f9d67d" direction="row" p="4">
        <Text fontWeight="bold">Grupa</Text>
        <Divider bg="black" thickness="2" mx="2" orientation="vertical" />
        <Text fontWeight="bold">Sala</Text>
        <Divider bg="black" thickness="2" mx="2" orientation="vertical" />
        <Text fontWeight="bold">Prowaczący</Text>
      </Flex>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="GRUPA" value="grupa" />
        <Select.Item label="SALA" value="sala" />
        <Select.Item label="WYKŁADOWCA" value="cross" />

      </Select>

      <Flex direction="column" p="4">
        <FormControl.Label>Grupa</FormControl.Label>
        <Input bg="#f9d67d" type="text" defaultValue="3ID14B" placeholder="password" />

        <FormControl.Label>Sala</FormControl.Label>
        <Input bg="#f9d67d" type="text" defaultValue="3.13D" placeholder="password" />

        <FormControl.Label>Prowadzacy</FormControl.Label>
        <Input bg="#f9d67d" type="text" defaultValue="mgr. Jan Kowalski" placeholder="password" />
      </Flex>

    </VStack>
  )
}

export default () => (
  <NativeBaseProvider>
    <Center flex={1} px="3">
      <Example />
    </Center>
  </NativeBaseProvider>
)
