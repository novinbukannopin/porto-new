'use client';

import type { BoxProps } from '@chakra-ui/react';
import { useColorModeValue, Heading, Text } from '@chakra-ui/react';

import MotionBox from '~/lib/components/motion/MotionBox';

const textProps: BoxProps = {
  marginY: 4,
};

const Content = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: 'spring' } },
        after: { opacity: 1, y: 0, transition: { type: 'spring' } },
      }}
      initial="before"
      animate="after"
    >
      <Heading size="lg">👋 Hi, how are you?</Heading>

      <Text {...{ ...textProps, textColor }}>
        I&apos;m Novin, a versatile Tech Enthusiast driven by a fervor for
        crafting data-driven solutions and engineering seamless backends.
      </Text>

      <Text {...{ ...textProps, textColor }}>
        With a solid foundation in technologies like Spring Java and Laravel, Im
        poised to architect robust backend systems that power applications with
        precision and performance. My curiosity extends to the world of data,
        where I delve into analysis, engineering, and visualization to extract
        meaningful insights.
      </Text>

      <Text {...{ ...textProps, textColor }}>
        My journey reflects a passion for building innovative solutions that
        resonate with users and elevate business outcomes. Here on this
        platform, I occasionally showcase exciting projects that blend my love
        for design and my leadership in driving high-performing teams towards
        success.
      </Text>
    </MotionBox>
  );
};

export default Content;
