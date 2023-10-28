import React from 'react';

import { Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Box, Flex, Text, Button } from '@chakra-ui/react';
import LastNews from '../../shared/components/lastNews/LastNews';
import HomeLayout from '../../layouts/home.layout';
import { MdSearch } from "react-icons/md"
import ToggleLightDark from '../../shared/components/toggleLightDark/toggleLightDark';

export default function Home() {


    return (

        <HomeLayout >
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
            <ToggleLightDark />
            <Flex flexDirection={{
                base: 'column', md: 'row'

            }}>
                <Card pt="5vh" minW="400px" bgColor="transparent" width={{
                    md: '120vw'
                }}>

                    <CardBody color="white" >
                        <Stack direction='row' justifyContent="center" alignItems="center" width="full">
                            <Button leftIcon={<MdSearch />} colorScheme='gray' variant='solid'>
                                Escolha a data que deseja visualizar a imagem
                            </Button>
                        </Stack>
                        <Stack mb='6' pt="5" justifyContent="center" alignItems="center">
                            <Heading size='lg'>Asteroide</Heading>

                        </Stack>

                        <Image
                            src='https://img.freepik.com/fotos-gratis/a-nave-espacial-orbita-o-planeta-no-ceu-noturno-estrelado-da-galaxia-explorando-o-fundo-gerado-pela-ia_24640-93342.jpg'

                            borderRadius='md'
                        />

                    </CardBody>
                    <Divider />
                    <CardFooter />


                </Card>
                <Box >
                    <LastNews />
                </Box>
            </Flex>
        </HomeLayout>

    );
}