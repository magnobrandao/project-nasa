import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from "../../layouts/Defaultlayout";
import {
    TableContainer,
    Table,
    TableCaption,
    Tr,
    Tbody,
    Td,
    Text,
    Box,
    Stack,
    Heading,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

interface AsteroidData {
    name: string;
    id: string;
    designation: string;
    absolute_magnitude_h: number;
    is_potentially_hazardous_asteroid: boolean;
}

export function Details() {

    const { id } = useParams();

    const [asteroidData, setAsteroidData] = useState<AsteroidData | null>(null);

    const getAsteroidData = async () => {
        try {
            const response = await axios.get(
                "https://api.nasa.gov/neo/rest/v1/neo/2164294?api_key=Ie25M3zSZBhfrQdesyHL1O7jQHJQwWHp5voA4BCE"
            );
            setAsteroidData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAsteroidData();
    }, []);
    return (
        <DefaultLayout>
            <Text
                textAlign="center"
                fontSize="4xl"
                fontFamily="monospace"
                fontWeight="bold"
                color="white"
                textTransform="uppercase"
                letterSpacing="0.1em"
                textShadow="0 0 10px rgba(255, 255, 255, 0.3)"
            >
                PROJETO NASA API
            </Text>
            <Box mt="15vh">
                {asteroidData ? (
                    <TableContainer>
                        <Stack mb="6" pt="5" justifyContent="center" alignItems="center">
                            <Heading size="lg">{asteroidData.name}</Heading>
                        </Stack>
                        <Table variant="striped" colorScheme="blue">
                            <TableCaption></TableCaption>

                            <Tbody>
                                <Tr>
                                    <Td>ID:</Td>
                                    <Td>{asteroidData.id}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Designation:</Td>
                                    <Td>{asteroidData.designation} (cm)</Td>
                                </Tr>
                                <Tr>
                                    <Td>Absolute Magnitude:</Td>
                                    <Td>{asteroidData.absolute_magnitude_h}</Td>
                                </Tr>

                                <Tr>
                                    <Td>Potentially Hazardous:</Td>
                                    <Td>
                                        {asteroidData.is_potentially_hazardous_asteroid
                                            ? "Yes"
                                            : "No"}
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                ) : (
                    <p>Loading asteroid data...</p>
                )}
            </Box>
        </DefaultLayout>
    );
}