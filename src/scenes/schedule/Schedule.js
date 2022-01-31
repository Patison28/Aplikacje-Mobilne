import React from "react";
import { Box, FlatList, Heading, Select, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, CheckIcon } from "native-base";

const Schedule = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today."
  }];
  let [service, setService] = React.useState("");
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <Box>
        <Heading fontSize="xl" p="4" pb="3">
          Plan zajęć
        </Heading>
        <Box w="3/4" maxW="300">
          <Select selectedValue={service} minWidth="200" accessibilityLabel="Dzień tygodnia" placeholder="Dzień tygodnia" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
          }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Poniedziałek" value="ux" />
            <Select.Item label="Wtorek" value="web" />
            <Select.Item label="Sroda" value="cross" />
            <Select.Item label="Czwartek" value="ui" />
            <Select.Item label="Ptątek" value="backend" />
          </Select>
        </Box>
        <FlatList data={data} renderItem={({
                                             item
                                           }) => <Box borderBottomWidth="1" _dark={{
          borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
          <HStack space={3} justifyContent="space-between">
            <VStack>
              <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                {item.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
              {item.timeStamp}
            </Text>
          </HStack>
        </Box>}
                  keyExtractor={item => item.id} />
      </Box>
      </Center>
    </NativeBaseProvider>
);
};

export default Schedule;
