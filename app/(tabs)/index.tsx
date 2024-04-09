import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Text>Page</Text> */}
      {/* <Link href={"/(modals)/login"}>Login</Link> */}
      {/* <Link href={"/(modals)/booking"}>Bookings</Link> */}
      {/* <Link href={"/listing/1"}>Listing detail page</Link> */}
    </View>
  );
};

export default Page;
