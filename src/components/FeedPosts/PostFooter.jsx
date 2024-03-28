import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'

const PostFooter = () => {
    const [likes, setLikes] = useState(20)
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        if(liked){
            setLiked(false)
            setLikes(likes - 1)
        } else {
            setLiked(true)
            setLikes(likes + 1)
        }
    }

    return (
        <>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
            <Box onClick={handleLike}>
                {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
            </Box>

            <Box cursor={"pointer"} fontSize={18}>
                <CommentLogo />
            </Box>
        </Flex>

        <Text fontWeight={600} fontSize={"sm"}>
            {likes} likes
        </Text>
        <Text fontWeight={700} fontSize={"sm"}>
            janedoe {" "}
            <Text as="span" fontWeight={400}>
            feeling good
        </Text>
        </Text>

        <Text fontSize={"sm"} color={"gray"}>
            View all 10 comments
        </Text>
        </>
    )
}

export default PostFooter