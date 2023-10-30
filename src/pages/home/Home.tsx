
import {
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Stack,
    Image,
    Box,
    Flex,
    Text,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdSearch } from "react-icons/md";
import NearEarth from "../../shared/components/nearEarth/NearEarth";
import DefaultLayout from "../../layouts/Defaultlayout";
import ToggleLightDark from "../../shared/components/toggleLightDark/toggleLightDark";
import api from "../../services/ApodApi";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export function Home() {
    const {
        isOpen: isOpenModal,
        onOpen: onOpenModal,
        onClose: onCloseModal,
    } = useDisclosure();

    const [startDate, setStartDate] = useState<Date | null | any>(new Date());

    const [data, setData] = useState<any>();

    const [error, setError] = useState(false);

    const fetchData = async () => {
        const apiKey = "aZY4Scxk3GwAsUJBdiVJ6FLn5g61qB6uY2Jirr57";
        try {
            const dateFormat = format(startDate, "yyyy-MM-dd");

            const response = await api.get(
                `apod?api_key=${apiKey}&date=${dateFormat}`
            );

            setData(response.data);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, [startDate]);

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
    };

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
            <ToggleLightDark />
            <Flex
                flexDirection={{
                    base: "column",
                    md: "row",
                }}
            >
                <Card
                    pt="5vh"
                    minW="400px"
                    bgColor="transparent"
                    width={{
                        md: "120vw",
                    }}
                >
                    <CardBody color="white">
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            width="full"
                        >
                            <DatePicker
                                maxDate={new Date()}
                                selected={startDate}
                                onChange={handleDateChange}
                                dateFormat="yyyy/MM/dd"
                                placeholderText="Click to select a date"
                                customInput={
                                    <Button
                                        leftIcon={<MdSearch />}
                                        colorScheme="gray"
                                        variant="solid"
                                    >
                                        Clique para escolher a data que deseja visualizar a imagem
                                    </Button>
                                }
                            />
                        </Stack>

                        <Stack mb="6" pt="5" justifyContent="center" alignItems="center">
                            <Heading size="lg">
                                {error && "Selecione uma data anterior"}
                                {!error && data?.title}
                            </Heading>
                        </Stack>

                        <Image
                            src={!error && data?.url}
                            onClick={onOpenModal}
                            borderRadius="md"
                            cursor="pointer"
                            maxH="50vh"
                            minW="100%"
                        />
                    </CardBody>
                    <Divider />
                    <CardFooter />
                </Card>
                <Box>
                    <NearEarth />
                </Box>
            </Flex>
            <Modal isOpen={isOpenModal} onClose={onCloseModal} size="4xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />

                    <Image
                        src={!error && data?.url}
                        onClick={onOpenModal}
                        borderRadius="sm"
                        maxH="80vh"
                        minW="100%"
                    />
                </ModalContent>
            </Modal>
        </DefaultLayout>
    );
}
