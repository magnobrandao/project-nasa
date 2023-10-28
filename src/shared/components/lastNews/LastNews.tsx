
import {
    Box,
    Heading,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    Container,

} from '@chakra-ui/react'

interface IBlogTags {
    tags: Array<string>
    marginTop?: SpaceProps['marginTop']
}

interface Props {
    marginTop?: number
    tags: any[]
}

const BlogTags = (props: Props) => {
    const { marginTop = 0, tags } = props

    return (
        <HStack spacing={2} marginTop={marginTop}>
            {tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
}


const LastNews = () => {
    return (
        <Container maxW={'4xl'} color="white">

            <Heading as="h2" marginTop="12">
                Latest News
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">
                <WrapItem width={{ base: '100%' }}>
                    <Box w="100%">
                        <Box borderRadius="lg" overflow="hidden">
                            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    transform="scale(1.0)"
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some text"
                                    objectFit="contain"
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                            </Box>
                        </Box>
                        <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
                        <Heading fontSize="xl" marginTop="2">
                            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                Some blog title
                            </Text>
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                        </Text>

                    </Box>
                </WrapItem>
            </Wrap>

        </Container>
    )
}

export default LastNews