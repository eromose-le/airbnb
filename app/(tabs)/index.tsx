import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChanged={function (category: string): void {
          throw new Error("Function not implemented.");
        } } />
      }} />
      {/* <Text>Page</Text>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/1"}>Listing detail page</Link> */}
    </View>
  );
};

export default Page;
