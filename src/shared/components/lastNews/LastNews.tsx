
import {
    Box,
    Heading,
    Text,
    Divider,
    Wrap,
    WrapItem,
    Container,

} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';


interface Data {
    name: string;
    is_potentially_hazardous_asteroid: boolean;
    kilometers_per_hour: string;
}

const LastNews = () => {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Ie25M3zSZBhfrQdesyHL1O7jQHJQwWHp5voA4BCE')
            .then(response => {
                const dataFromApi = response.data.near_earth_objects;
                setData(dataFromApi);
                console.log(dataFromApi)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Container maxW={'4xl'} color="white">
            <Heading as="h2" marginTop="12">
                Latest News
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">
                <WrapItem width={{ base: '100%' }}>
                    <Box w="100%" borderRadius="lg" overflow="hidden">
                        <Heading fontSize="xl" marginTop="2">
                            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                {data?.name}
                            </Text>
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2">
                            is_potentially_hazardous_asteroid: {data?.is_potentially_hazardous_asteroid?.toString()}
                        </Text>
                        <Text as="p" fontSize="md" marginTop="2">
                            kilometers_per_hour: {data?.kilometers_per_hour}
                        </Text>
                    </Box>
                </WrapItem>
            </Wrap>
        </Container>
    );
};

export default LastNews;