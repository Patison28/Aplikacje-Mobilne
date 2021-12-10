import React from "react"
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Input,
  FormControl
} from "native-base"
export const Example = () => {
  let [service, setService] = React.useState("")
  return (
    <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="GRUPA" value="grupa" />
        <Select.Item label="SALA" value="sala" />
        <Select.Item label="WYKŁADOWCA" value="cross" />

      </Select>


          <FormControl.Label>Grupa</FormControl.Label>
          <Input type="text" defaultValue="3ID14B" placeholder="password" />

           <FormControl.Label>Sala</FormControl.Label>
           <Input type="text" defaultValue="3.13D" placeholder="password" />

            <FormControl.Label>Prowadzacy</FormControl.Label>
            <Input type="text" defaultValue="mgr. Jan Kowalski" placeholder="password" />


    </VStack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
