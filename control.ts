export interface ProductItem {
  name?: string;
}
interface SearchBtn{
  name?: string,
  active?: boolean
}

export interface Location{
  name: string,
  active: boolean
}

export const searchItem:SearchBtn[] = reactive([
  {
    name: "All",
    active: true
  },
  {
    name: "Rent",
    active: false,
  },
  {
    name: "House",
    active: false
  }
])

export const locationList: Location[] = reactive([
  {
    name: "Lagos",
    active: true
  },
  {
    name: "Ikeja",
    active: false
  },
  {
    name: "Ape",
    active: false
  },
  {
    name: "Ogba",
    active: false
  },
  {
    name: "Ikorodu",
    active: false
  },
  {
    name: "Ogun",
    active: false
  }
])