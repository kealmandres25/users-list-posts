import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  SafeAreaView,
  Switch,
} from "react-native";
import Cards from "../components/Cards";
import { useQuery } from "@tanstack/react-query";
import { useColorScheme } from "nativewind";
import useUserStore from "../api/store";
import useClient from "../api/client";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const setUser = useUserStore((state) => state.setUsers);
  const setPosts = useUserStore((state) => state.setPosts);
  const users = useUserStore((state) => state.users);
  const client = useClient();

  const getUsers = async () => {
    const userList = await client.getUsers();
    const posts = await client.getPosts();
    setUser(userList);
    setPosts(posts);
    return res.data;
  };

  const getUsersList = useQuery({ queryKey: ["users"], queryFn: getUsers });

  return (
    <SafeAreaView className="dark:bg-black" style={styles.container}>
      <View className="flex-row justify-between items-center w-full px-2 h-10 bg-slate-200 dark:bg-slate-500">
        <Text>Logo</Text>
        <Text className="text-slate-800 font-bold dark:text-slate-100">
          User List
        </Text>
        <View className="flex-row items-center ">
          <Switch
            value={colorScheme == "dark"}
            onChange={() => toggleColorScheme()}
          />
          <MaterialCommunityIcons
            name={colorScheme == "dark" ? "weather-night" : "weather-sunny"}
            size={20}
            color={colorScheme == "dark" ? "white" : "black"}
          />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        {users?.length == 0 ? (
          <Text className="dark:text-white mt-2">No user found.</Text>
        ) : (
          users?.map((user) => <Cards key={user.id} user={user} />)
        )}
      </ScrollView>
      <StatusBar
        barStyle={colorScheme == "dark" ? "light-content" : "dark-content"}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
});
