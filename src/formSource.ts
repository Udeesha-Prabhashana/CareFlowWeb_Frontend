export interface Input {
  id: string | number;
  label: string;
  type: string;
  placeholder?: string; // Making placeholder optional
}

export const DoctorInputs: Input[] = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: "userEmail",
    label: "Email",
    type: "email",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: "userMobileNo",
    label: "Phone",
    type: "text",
    placeholder: "+94 776 750 158",
  },
  {
    id: "userSpecialization",
    label: "Specialization",
    type: "text",
    placeholder: "Cardiology",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "Amar Street, Colombo 7.",
  },
  {
    id: "BookingCharge",
    label: "Booking Charge",
    type: "number",
    placeholder: "2000",
  },
  {
    id: "registrationNumber",
    label: "Registration Number",
    type: "text",
    placeholder: "AW2323242",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter description",
  },
];

export const productInputs: Input[] = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];

export const hotelInputs: Input[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "My Hotel",
  },
  {
    id: "type",
    label: "Type",
    type: "text",
    placeholder: "hotel",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "New York",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "elton st, 216",
  },
  {
    id: "distance",
    label: "Distance from City Center",
    type: "text",
    placeholder: "500",
  },
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "The best Hotel",
  },
  {
    id: "desc",
    label: "Description",
    type: "text",
    placeholder: "description",
  },
  {
    id: "cheapestPrice",
    label: "Price",
    type: "text",
    placeholder: "100",
  },
];

export const roomInputs: Input[] = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "2 bed room",
  },
  {
    id: "facilities",
    label: "facilities",
    type: "text",
    placeholder: "King size bed, 1 bathroom",
  },
  {
    id: "price",
    label: "Price",
    type: "number",
    placeholder: "100",
  },
  {
    id: "maxPeople",
    label: "Max People",
    type: "number",
    placeholder: "2",
  },
];
