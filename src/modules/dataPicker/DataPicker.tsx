import { Button } from "@chakra-ui/button";
import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdSearch } from "react-icons/md";
import { dataContext } from "../../pages/home/Home";


export const DatePickerComponent: React.FC = () => {
    const { startDate, handleDateChange } = useContext(dataContext)
    console.log(startDate)
    return (

        <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            placeholderText="Click to select a date"
            customInput={<Button leftIcon={<MdSearch />} colorScheme='gray' variant='solid' >
                Clique para escolher a data que deseja visualizar a imagem
            </Button>}
        />
    );
};