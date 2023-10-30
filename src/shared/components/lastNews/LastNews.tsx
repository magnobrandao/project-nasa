import {
    Box,
    Heading,
    Text,
    Divider,
    Wrap,
    WrapItem,
    Container,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface DataProps {
    id: string;

    name: string;
    is_potentially_hazardous_asteroid: boolean;
    kilometers_per_hour: string;
}

const LastNews = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.nasa.gov/neo/rest/v1/feed?&api_key=aZY4Scxk3GwAsUJBdiVJ6FLn5g61qB6uY2Jirr57`
            );
            const date = format(new Date(), "yyyy-MM-dd");
            const dataFromApi = response?.data?.near_earth_objects[date];
            setData(dataFromApi);
            console.log(
                "🚀 ~ file: LastNews.tsx:34 ~ .then ~ dataFromApi:",
                dataFromApi
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container maxW={"4xl"} color="white">

            <Heading as="h2" marginTop="12">
                Latest News
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">

                {data?.map((item: DataProps) => {
                    return (
                        <Link to={`/detail/${item.id}`}>
                            <WrapItem width={{ base: "100%" }}>
                                <Box w="100%" borderRadius="lg" overflow="hidden">
                                    <Heading fontSize="xl" marginTop="2">
                                        <Text
                                            textDecoration="none"
                                            _hover={{ textDecoration: "none" }}
                                        >
                                            {item?.name}
                                        </Text>
                                    </Heading>
                                    <Text as="p" fontSize="md" marginTop="2">
                                        is_potentially_hazardous_asteroid:{" "}
                                        {item?.is_potentially_hazardous_asteroid?.toString()}
                                    </Text>
                                    <Text as="p" fontSize="md" marginTop="2">
                                        kilometers_per_hour: {item?.kilometers_per_hour}
                                    </Text>
                                </Box>
                            </WrapItem>
                        </Link>
                    );
                })}

            </Wrap>
        </Container>
    );
};

export default LastNews;