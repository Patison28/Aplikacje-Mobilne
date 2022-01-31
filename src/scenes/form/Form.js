import * as React from 'react'
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from 'native-base'
import {useState} from "react";
import ClientRequest from "../../routes/ExternalCalls/ClientRequest";

export const Example = () => {
  const [name, setName] = useState(undefined);
  const [surname, setSurname] = useState(undefined);
  const [group, setGroup] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}
        fontWeight="semibold"
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: 'warmGray.200',
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <VStack space={1} mt="2">
        <FormControl>
          <FormControl.Label>Imie</FormControl.Label>
          <Input onChange = {(event) => {
            setName(event.target.value);
          }}/>
        </FormControl>
        <FormControl>
          <FormControl.Label>Nazwisko</FormControl.Label>
          <Input onChange = {(event) => {
            setSurname(event.target.value);
          }}/>
        </FormControl>
        <FormControl>
          <FormControl.Label>Grupa</FormControl.Label>
          <Input onChange = {(event) => {
            setGroup(event.target.value);
          }}/>
        </FormControl>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChange = {(event) => {
            setEmail(event.target.value);
          }}/>
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" onChange = {(event) => {
            setPassword(event.target.value);
          }}/>
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" onChange = {(event) => {
            setConfirmPassword(event.target.value);
          }}/>
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={
          async () => {
            const newClient = {Name: name, LastName: surname, ClientGroup: group, Email: email, Password: password};
          const result = await ClientRequest.registerClient(newClient)
          console.log(result)
        }}>
          Sign up
        </Button>
      </VStack>
    </Box>
  )
}

export default () => (
  <NativeBaseProvider>
    <Center flex={1} px="3">
      <Example />
    </Center>
  </NativeBaseProvider>
)
