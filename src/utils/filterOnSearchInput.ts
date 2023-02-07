import { Device } from "@/interfaces/devicesAPI.interface";

export default function filterOnSearchInput(
  productData: Device[],
  searchValue: string
) {
  return productData?.filter((device) => {
    if (
      device.product.name
        .toLocaleLowerCase()
        ?.includes(searchValue.toLocaleLowerCase())
    ) {
      return device.product.name;
    }
  });
}
