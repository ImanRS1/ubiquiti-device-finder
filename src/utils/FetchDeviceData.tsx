import useSWR from "swr";

const fetcher = async () =>
  await fetch("https://static.ui.com/fingerprint/ui/public.json").then((res) =>
    res.json()
  );

export default function FetchDevicesData() {
  const { data, error } = useSWR("devices-data", fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  const devicesData = data;
  return devicesData;
}
