'use client'

import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react"

export default function HomeTop() {
  return (
    <>
    <Box backgroundColor={'purple.100'} h={'550px'} w={'80%'} m={'auto'} mt={'20px'} borderRadius={'18px'}>
      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
        <VStack w={'25%'} alignItems={'flex-start'}>
          <Text>Ahead app</Text>
          <Heading>Master your life by mastering emotions</Heading>
          <HStack mt={'10px'}>
          <Image src="https://www.ahead-app.com/images/app-store.svg" alt=""/>
          <VStack>
            <Image src="https://www.ahead-app.com/images/five-stars.png" alt=""/>
            <Text fontSize={'xs'}>100+ AppStore reviews</Text>
          </VStack>
          </HStack>
        </VStack>
        <Image src="https://storage.googleapis.com/web-api-media-uploads/media/Image_1_8d38f94793/Image_1_8d38f94793.svg" alt=""/>
      </Box>
    </Box>
    <Box display={'flex'} w={'80%'} m={'auto'} mt={'40px'} justifyContent={'space-between'}>
      <Heading size={'lg'}>EQ beats IQ</Heading>
      <Text w={'25%'} color={'gray'}>People with high Emotional Intelligence(EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</Text>
      <Text w={'25%'} color={'gray'}>They are more successfull in their pursuits and make for inspiring leaders. According to science, they earn $29K a year.</Text>
    </Box>
    </>
  )
}
