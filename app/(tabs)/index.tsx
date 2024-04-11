import { View } from "react-native";
import React, { useMemo, useState } from "react";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 75 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      <ListingsMap listings={getoItems} />
      <ListingsBottomSheet listings={items} category={category} />

      {/* <Text>Page</Text> */}
      {/* <Listings listings={items} category={category} /> */}
      {/* <Link href={"/(modals)/login"}>Login</Link> */}
      {/* <Link href={"/(modals)/booking"}>Bookings</Link> */}
      {/* <Link href={"/listing/1"}>Listing detail page</Link> */}
    </View>
  );
};

export default Page;
