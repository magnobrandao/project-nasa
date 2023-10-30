import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../../layouts/Defaultlayout";
import { Text, Input, InputGroup, InputLeftElement, Box, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

interface imageData {
    url: string
}
export function Search() {
    const [value, setValue] = useState('')
    const [imageData, setImageData] = useState<ImageData | null | any>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }


    const getImageData = async () => {
        try {
            const response = await axios.get(
                `https://images-api.nasa.gov/search?q=${value}`
            );
            setImageData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getImageData();
    }, []);

    return (
        <DefaultLayout>
            <Text textAlign="center"
                fontSize="4xl"
                fontFamily="monospace"
                fontWeight="bold"
                color="white"
                textTransform="uppercase"
                letterSpacing="0.1em"
                textShadow="0 0 10px rgba(255, 255, 255, 0.3)">
                PROJETO NASA API
            </Text>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <FiSearch color='gray.300' />
                </InputLeftElement>
                <Input
                    value={value}
                    onChange={handleChange}
                    placeholder='Here is a sample placeholder'
                    size='sm'
                />
            </InputGroup>
            <Wrap spacing="30px" marginTop="5">

                {imageData?.map((item: imageData) => {
                    return (

                        <WrapItem width={{ base: "100%" }}>
                            <Box w="100%" borderRadius="lg" overflow="hidden" bg="linear-gradient(to top, #283E51, #2665b3, rgba(0, 0, 0, 0.6))" p="4" my="1"
                                _hover={{
                                    boxShadow: "0 0 100px rgba(255, 5, 5, 0.8)",
                                    transition: "all 0.3s ease;"
                                }}>
                                <Image
                                    src={imageData?.url}
                                    borderRadius="md"
                                    cursor="pointer"
                                    maxH="50vh"
                                    minW="100%"
                                />
                            </Box>
                        </WrapItem>

                    );
                })}

            </Wrap>
        </DefaultLayout>
    )
}