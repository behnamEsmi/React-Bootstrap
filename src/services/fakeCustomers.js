import * as genresAPI from "./fakeBankName";

const customers = [
  {
    _id: "1",
    name: "بهنام",
    family: "اسمی خانلو",
    bankDetail: { bankName: "ملت", _id: 10 },
  },
  {
    _id: "2",
    name: "امید",
    family: "طلایی",
    bankDetail: { bankName: "ملت", _id: 10 },
  },
  {
    _id: "3",
    name: "حامد",
    family: "پیرانی",
    bankDetail: { bankName: "ملت", _id: 10 },
  },
  {
    _id: "4",
    name: "بهزاد",
    family: "اسمی خانلو",
    bankDetail: { bankName: "ملت", _id: 10 },
  },
  {
    _id: "5",
    name: "شهاب",
    family: "اسمی خانلو",
    bankDetail: { bankName: "ملت", _id: 10 },
  },
  {
    _id: "6",
    name: "حسن",
    family: "اسمی خانلو",
    bankDetail: { bankName: "آینده", _id: 11 },
  },
  {
    _id: "7",
    name: "اکبر",
    family: "اسمی خانلو",
    bankDetail: { bankName: "آینده", _id: 11 },
  },
  {
    _id: "8",
    name: "صغری",
    family: "اسمی خانلو",
    bankDetail: { bankName: "سپه", _id: 12 },
  },
  {
    _id: "9",
    name: "کبری",
    family: "اسمی خانلو",
    bankDetail: { bankName: "سپه", _id: 12 },
  },
  {
    _id: "10",
    name: "ندا",
    family: "اسمی خانلو",
    bankDetail: { bankName: "سپه", _id: 12 },
  },
];

export function getCustomers() {
  return customers;
}

export function getCustomer(id) {
  return customers.find((m) => m._id === id);
}

export function saveCustomer(customer) {
  let customerInDb = customers.find((m) => m._id === customer._id) || {};
  customerInDb.name = customer.name;
  customerInDb.genre = genresAPI.banksName.find(
    (g) => g._id === customer.genreId
  );
  customerInDb.numberInStock = customer.numberInStock;
  customerInDb.dailyRentalRate = customer.dailyRentalRate;

  if (!customerInDb._id) {
    customerInDb._id = Date.now();
    customers.push(customerInDb);
  }

  return customerInDb;
}

export function deleteCustomer(id) {
  let customerInDb = customers.find((m) => m._id === id);
  customers.splice(customers.indexOf(customerInDb), 1);
  return customerInDb;
}
