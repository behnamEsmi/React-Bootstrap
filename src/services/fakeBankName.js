export const banksName = [
  { _id: 0, name: "همه" },
  { _id: 10, name: "ملت" },
  { _id: 11, name: "آینده" },
  { _id: 12, name: "سپه" },
];

export function getBanksName() {
  return banksName.filter((g) => g);
}
