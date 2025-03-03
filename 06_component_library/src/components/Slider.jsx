import {profiles} from './profiles';
import { useState } from 'react'
import {Avatar, Box, Text, Card, Flex, Button} from '@radix-ui/themes';

export default function Slider() {

    const [index, setCurrentIndex] = useState(0);

    function nextPost() {
        if (index < profiles.length - 1) {
          setCurrentIndex(index + 1);
        }
    }

    function previosPost() {
        if (index > 0) {
          setCurrentIndex(index - 1);
        }
    }

    let currentProfile = profiles[index];

    return(
    <Card style={{ backgroundColor: "var(--iris-a9)", radius: "none" }}>
      <Flex gap="2" align="center">
      <Avatar size="9" fallback="T" radius="full" src ={currentProfile.avatar} />
        <Box>
        <Text as="div" size="5" weight="bold">{currentProfile.name}</Text>
        <Text as="div" size="3" color="gray">{currentProfile.position}</Text>
        <Text as="div" size="2" color="gray">{currentProfile.description}</Text>
        </Box>

        <Button variant="classic" radius="full" onClick={previosPost}>Previous post</Button>
        <Button variant="classic" radius="full" onClick={nextPost}>Next post</Button>
      </Flex>
    </Card>
    )
}