import React, { useState } from 'react';
import SimpleSidebar from '../../shared/components/sidebar/SimpleSidebar';
import { Card, CardBody, CardFooter, Divider, Flex, Heading, Stack, Image, Input, Box } from '@chakra-ui/react';
import LastNews from '../../shared/components/lastNews/LastNews';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';

export default function Home() {

    const [date, setDate] = useState(new Date());
    return (
        <Flex>
            <SimpleSidebar />

            <Card maxW='md' pt="20vh">
                <SingleDatepicker
                    name="date-input"
                    date={date}
                    onDateChange={setDate}
                    configs={{
                        dateFormat: 'dd-MM-yyyy',

                    }}
                />
                <CardBody>
                    <Stack mb='6' spacing='3' justifyContent="center" alignItems="center">
                        <Heading size='lg'>Asteroide</Heading>

                    </Stack>

                    <Image
                        src='https://img.freepik.com/fotos-gratis/a-nave-espacial-orbita-o-planeta-no-ceu-noturno-estrelado-da-galaxia-explorando-o-fundo-gerado-pela-ia_24640-93342.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />

                </CardBody>
                <Divider />
                <CardFooter />


            </Card>
            <Box >
                <LastNews />
            </Box>
        </Flex>
    );
}