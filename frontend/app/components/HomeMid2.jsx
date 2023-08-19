'use client'
import { Box, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function HomeMid2() {
    return (
        <>
            <Box backgroundColor={'orange.50'} pl={'30px'} pt={"20px"} w={'80%'} m={'auto'} mt={'70px'} borderRadius={'20px'}>
                <VStack align={"left"}  mt={"50px"}>
                    <Text color={'gray.700'} fontWeight={"semibold"} fontSize={"md"}>Built out of frustation</Text>
                    <Heading fontSize={'5xl'}>Meet the ahead app</Heading>
                </VStack>
                <Flex alignItems={'center'} justifyContent={'space-evenly'} mt={'5'}>
                    <Box>
                        <Image src='https://storage.googleapis.com/web-api-media-uploads/media/Image_82bc2b66bc/Image_82bc2b66bc.svg'/>
                    </Box>
                    <VStack w={'30%'}>
                    <Text fontSize={'2xl'} color={'gray.700'}>
                        A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional
                        intelligence.
                    </Text>
                    <Text fontSize={'2xl'} mt={'15px'} color={'gray.700'}>
                        Think of it as a pocket cheerleader towards a better, more fulfilling.
                    </Text>
                    </VStack>
                </Flex>
            </Box>
        </>
    )
}
