import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from "../../layouts/Defaultlayout";
import { Text, Box, Stack, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiPhoneIncoming, FiSearch } from "react-icons/fi";

interface ImageData {
    center: string;
    date_created: string;
    description: string;
    keywords: string[];
    media_type: string;
    nasa_id: string;
    title: string;
}

interface ImageItem {
    data: ImageData[];
    href: string;
}

interface ApiResponse {
    collection: {
        href: string;
        items: ImageItem[];
        links: {
            href: string;
            rel: string;
            render: string;
        }[];
    };
    links: {
        href: string;
        prompt: string;
        rel: string;
    }[];
    metadata: {
        total_hits: number;
    };
    version: string;
}
interface AsteroidData {
    id: number;
    name: string;
    diameter: number;
    isPotentiallyHazardous: boolean;
    // adicione outras propriedades do asteroide, se necessário
}
export function Search() {
    const [value, setValue] = React.useState('')
    console.log(value)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }


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

        </DefaultLayout>
    )
}