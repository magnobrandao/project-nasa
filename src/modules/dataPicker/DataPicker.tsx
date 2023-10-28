import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdSearch } from "react-icons/md";

export const DatePickerComponent: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    return (
        <DatePicker
            onChange={handleDateChange}
            placeholderText="Click to select a date"
            customInput={<Button leftIcon={<MdSearch />} colorScheme='gray' variant='solid' >
                Clique para escolher a data que deseja visualizar a imagem
            </Button>}
        />
    );
};