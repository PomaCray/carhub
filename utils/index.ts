import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
    const headers ={
        'X-RapidAPI-Key': '1f1741f306msh30ccfc0b8ab0c91p11687djsne0fb68d56f06',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'       
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers: headers,});

    const result = await response.json();

    return result;

}

export const calculationCarRent = (city_mpg:number, year:number) => {
    const basePricePerday = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.5;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerday + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);    
};

export const generateCarImageUrl = (car: CarProps, angle? : string) => {
    const url = new URL ('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type:string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName;
}
   