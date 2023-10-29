
import { Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Box, Flex, Text, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import LastNews from '../../shared/components/lastNews/LastNews';
import DefaultLayout from '../../layouts/Defaultlayout';
import ToggleLightDark from '../../shared/components/toggleLightDark/toggleLightDark';
import { DatePickerComponent } from '../../modules/dataPicker/DataPicker';

import useApodApi from '../../hooks/useApodApi';
import { createContext, useState } from 'react';

interface dataContextType {
    startDate: Date | null
    handleDateChange: (date: Date | null) => void;
}

export const dataContext = createContext({} as dataContextType)


export function Home() {

    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
    const { imageUrl, title } = useApodApi();

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const handleDateChange = async (date: Date | null) => {
        await setStartDate(date);

    };

    return (

        <DefaultLayout >
            <dataContext.Provider value={{ startDate, handleDateChange }}>
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

                                <DatePickerComponent />
                            </Stack>

                            <Stack mb='6' pt="5" justifyContent="center" alignItems="center">
                                <Heading size='lg'>{title}</Heading>

                            </Stack>

                            <Image
                                src={imageUrl}
                                onClick={onOpenModal2}
                                borderRadius='md'
                                cursor="pointer"
                                maxH="50vh"
                                minW="100%"
                            />

                        </CardBody>
                        <Divider />
                        <CardFooter />


                    </Card>
                    <Box >
                        <LastNews />
                    </Box>
                </Flex>

                <Modal isOpen={isOpenModal2} onClose={onCloseModal2} size='4xl'>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />

                        <Image
                            src={imageUrl}
                            onClick={onOpenModal2}
                            borderRadius='sm'
                            maxH="80vh"
                            minW="100%"

                        />



                    </ModalContent>
                </Modal>
            </dataContext.Provider>

        </DefaultLayout>

    );

}