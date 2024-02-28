import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Switch,
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { router, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useUserStore from "../../api/store";
import PostCards from "../../components/PostCards";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewUser = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { id } = useLocalSearchParams();
  const users = useUserStore((state) => state.users);
  const postList = useUserStore((state) => state.posts);
  const user = users.find((user) => user.id == id);
  const posts = postList.filter((post) => post.userId == user.id);

  const address = (add) => {
    return add?.suite + " " + add.street + ", " + add.city;
  };

  return (
    <SafeAreaView className="dark:bg-black" style={styles.container}>
      <View className="flex-row justify-between items-center w-full px-2 h-10 bg-slate-200 dark:bg-slate-500">
        <Pressable className=" p-2  rounded-lg" onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left-bold-circle-outline"
            size={24}
            color={colorScheme == "dark" ? "white" : "black"}
          />
          {/* <Text className="dark:text-slate-100"> {"< "}Back</Text> */}
        </Pressable>
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
      <View className="flex-1 items-center mt-1">
        <View className="justify-center items-center h-1/3 w-full ">
          <Image
            style={{ width: 70, height: 70, borderRadius: 10 }}
            source={require("../../assets/istockphoto-1130884625-612x612.png")}
          />
          <Text className="font-bold mt-2 text-base dark:text-slate-200">
            {user.name}
          </Text>
          <Text className="font-semibold text-xs dark:text-slate-200">
            {user.company.name}
          </Text>
          <Text className="font-semibold text-xs underline text-cyan-800 dark:text-cyan-600">
            {user.email}
          </Text>
          <View className="flex-col align-top border-slate-400 border-2 rounded-xl w-full min-h-[70] mt-2 p-2 pl-4">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="card-account-phone"
                size={20}
                color={colorScheme == "dark" ? "white" : "black"}
              />
              <Text className="font-semibold text-xs ml-2 dark:text-slate-200">
                {user.phone}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="web"
                size={20}
                color={colorScheme == "dark" ? "white" : "black"}
              />
              <Text className="font-semibold text-xs ml-2 dark:text-slate-200">
                {user.website}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="home"
                size={20}
                color={colorScheme == "dark" ? "white" : "black"}
              />
              <Text className="font-semibold text-xs ml-2 dark:text-slate-200">
                {address(user.address)}
              </Text>
            </View>
          </View>
        </View>
        <View className="h-2/3 w-full p-2 ">
          <Text className="font-bold text-base ml-2 dark:text-slate-200">
            Posts
          </Text>
          <FlatList
            data={posts}
            renderItem={({ item }) => <PostCards post={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 5,
  },
});
export default ViewUser;
