import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      <Listings listings={items} category={category} />
      {/* <Text>Page</Text> */}
      {/* <Link href={"/(modals)/login"}>Login</Link> */}
      {/* <Link href={"/(modals)/booking"}>Bookings</Link> */}
      {/* <Link href={"/listing/1"}>Listing detail page</Link> */}
    </View>
  );
};

export default Page;
