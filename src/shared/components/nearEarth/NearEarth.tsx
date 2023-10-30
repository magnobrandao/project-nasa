import {
    Box,
    Heading,
    Text,
    Divider,
    Wrap,
    WrapItem,
    Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useApiNearEarth } from "../../../hooks/useApiNearEarth";

interface DataProps {
    id: string;

    name: string;
    is_potentially_hazardous_asteroid: boolean;
    kilometers_per_hour: string;
}

const NearEarth = () => {

    const data = useApiNearEarth();

    return (
        <Container maxW={"4xl"} color="white">

            <Heading as="h2" marginTop="12" size="lg">
                Asteroides próximos
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">

                {data?.slice(0, 8).map((item: DataProps) => {
                    return (
                        <Link to={`/detail/${item.id}`}>
                            <WrapItem width={{ base: "100%" }}>
                                <Box w="100%" borderRadius="lg" overflow="hidden" bg="linear-gradient(to top, #283E51, #2665b3, rgba(0, 0, 0, 0.6))" p="4" my="1"
                                    _hover={{
                                        boxShadow: "0 0 100px rgba(255, 5, 5, 0.8)",
                                        transition: "all 0.3s ease;"
                                    }}>
                                    <Heading fontSize="2xl" marginTop="2" color="whiteAlpha.900">
                                        <Text
                                            textDecoration="none"
                                            _hover={{ textDecoration: "none" }}
                                        >
                                            {item?.name}
                                        </Text>
                                    </Heading>
                                    <Text as="p" fontSize="md" marginTop="2" color="white">
                                        is_potentially_hazardous_asteroid:{" "}
                                        {item?.is_potentially_hazardous_asteroid?.toString()}
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

export default NearEarth;