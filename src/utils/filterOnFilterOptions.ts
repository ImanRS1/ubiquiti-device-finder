import { Device } from "@/interfaces/devicesAPI.interface";

export default function filterOnFilterOptions(
  productArray: Device[],
  filterOptions: string[]
) {
  return productArray?.filter((product) =>
    filterOptions?.includes(product.line.name)
  );
}
