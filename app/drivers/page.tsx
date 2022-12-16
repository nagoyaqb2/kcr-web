"use client";

import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

import LoadingSkeleton from "./LoadingSkeleton";

export default function DriversPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [drivers, setDrivers] = useState<any>([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      const { data } = await supabase.from("drivers").select();
      setDrivers(data);
      setIsLoading(false);
    };

    fetchDrivers();
  }, []);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <section className="bg-transparent min-h-[calc(100vh-90px)] max-w-[1280px] mx-auto px-12 mt-[100px]">
      {drivers.map((driver: any) => (
        <p key={driver.id}>{driver.name}</p>
      ))}
    </section>
  );
}
