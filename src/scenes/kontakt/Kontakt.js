import React from 'react'
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Input,
  Icon,
} from 'native-base'

import { Ionicons } from '@expo/vector-icons'

export const Example = () => {
  const data = [
    {

      fullName: 'dr hab. inż. Stanisław Deniziak',
      recentText: ' deniziak@eden.tu.kielce.pl ',
      subtitle: ' Sala 1.05, budynek D ',
      avatarUrl:
        'https://achilles.tu.kielce.pl/portal/pliki/avatars/sdeniziak.jpg/@@images/9796bac7-4f23-4747-9af8-931b543ca14f.jpeg',
    },
    {

      fullName: ' dr inż. Barbara Łukawska',
      recentText: 'b.lukawska@tu.kielce.pl ',
      subtitle: ' Sala 2.05, budynek D ',
      avatarUrl:
        'https://achilles.tu.kielce.pl/portal/pliki/avatars/blukawska.jpg/@@images/d383fb8c-7da6-4767-b2da-cd25dcc0eb7f.jpeg',
    },
    {

      fullName: 'dr inż. Grzegorz Łukawski',
      recentText: 'g.lukawski@tu.kielce.pl ',
      subtitle: ' Sala 4.05, budynek D ',
      avatarUrl: 'https://achilles.tu.kielce.pl/portal/pliki/avatars/glukawski.jpg/@@images/84e9b5c1-4366-49cf-b4c1-6dc66c2504cc.jpeg',
    },
    {

      fullName: 'dr inż. Adam Krechowicz',
      recentText: 'a.krechowicz@tu.kielce.pl ',
      subtitle: ' Sala .05, budynek D ',
      avatarUrl:
        'https://achilles.tu.kielce.pl/portal/pliki/avatars/akrechowicz.jpg/@@images/c879a3d2-f56f-4470-a5ab-03ed661cd014.jpeg',
    },
    {
      fullName: 'mgr inż. Mateusz Pawełkiewicz',
      recentText: 'm.pawelkiewicz@tu.kielce.pl',
      subtitle: ' Sala 3.05, budynek D ',
      avatarUrl:
        'https://achilles.tu.kielce.pl/portal/pliki/avatars/mpawelkiewicz.png/@@images/00601b0a-7807-4313-a811-01843ecadb32.png',
    },
  ]
  return (

    <Box
      w={{
        base: '100%',
        md: '25%',

      }}
    >
      <VStack>
        <Heading
          fontSize="50"
          width="100%"
          p="5px"
          color="#f9d67d"
        >
          WYKŁADOWCY
        </Heading>
      </VStack>

      <VStack width="100%" space="15" alignItems="center">

        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: 'none' } },
          }}
          InputLeftElement={(
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          )}
        />
      </VStack>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack bg="#FDF5DE" space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack color="#FFF7DC">
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                >
                  {item.recentText}

                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                >
                  {item.subtitle}

                </Text>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />

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
