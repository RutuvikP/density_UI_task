'use client'
import { Box, Heading, VStack, Text, Flex } from "@chakra-ui/react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function HomeMid() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.to('.cards', {
      xPercent: -100,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.cards',
        start: 'top bottom',
        scrub: true,
      },
    });

    gsap.from(headingRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);


  return (
    <>
      <Heading mt={'70px'} ml={'10%'} ref={headingRef}>Does this sound familiar...</Heading>
      <Flex mt={'30px'} gap={'5'}>
        <VStack className="cards" borderRadius={'10px'} w={'300px'} p={'15px'} bgColor={'purple.50'}>
        <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
            😠
          </span>
          <Text fontWeight={'bold'}>You argue with a colleague</Text>
          <Text>You get angry and defensive instead of staying open and working towards common ground.</Text>
        </VStack>
        {/* 2nd */}
        <VStack className="cards" borderRadius={'10px'} w={'300px'} p={'15px'} bgColor={'blueviolet'}>
        <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
            😯
          </span>
          <Text fontWeight={'bold'}>You get a promotion at work</Text>
          <Text>You question yourself and wonder when they will realize you are an unqualified imposter instead of trusting yourself & your abilities.</Text>
        </VStack>
        {/* 3rd */}
        <VStack className="cards" borderRadius={'10px'} w={'300px'} p={'15px'} bgColor={'orange.100'}>
        <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
            😒
          </span>
          <Text fontWeight={'bold'}>You are at a lively dinner party</Text>
          <Text>You play on your phone, instead of confidently approaching strangers and striking up a chat.</Text>
        </VStack>
        {/* 4th */}
        <VStack className="cards" borderRadius={'10px'} w={'300px'} p={'15px'} bgColor={'yellow.100'}>
          <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
            🤨
          </span>
          <Text fontWeight={'bold'}>You attend a class reunion</Text>
          <Text>You compare yourself with your peers achievements instead of making your self-judgment more independent of others.</Text>
        </VStack>
        {/* 5th */}
        <VStack className="cards" borderRadius={'10px'} w={'300px'} p={'15px'} bgColor={'gray.200'}>
        <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
            😬
          </span>
          <Text fontWeight={'bold'}>You hit dead end in a negotiation</Text>
          <Text>You get nervous frazzled and frustrated instead of staying optimistic and solution-oriented.</Text>
        </VStack>
        {/* 6th */}
        <VStack className="cards" borderRadius={'10px'} w={'300px'} p={'15px'} bgColor={'purple.50'}>
        <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>
            😠
          </span>
          <Text fontWeight={'bold'}>You argue with a colleague</Text>
          <Text>You get angry and defensive instead of staying open and working towards common ground.</Text>
        </VStack>
      </Flex>
    </>
  )
}
