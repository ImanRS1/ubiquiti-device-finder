import useSWR from "swr";

const fetcher = async () =>
  await fetch("https://static.ui.com/fingerprint/ui/public.json").then((res) =>
    res.json()
  );

export default function FetchDevicesData() {
  const { data, error } = useSWR("devices-data", fetcher);
  // TODO: handle error and loading stage globally
  // if (error)
  // if (!data)

  return data;
}
