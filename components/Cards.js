import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const Cards = ({ user }) => {
  const address = (add) => {
    return add.suite + " " + add.street + ", " + add.city;
  };

  const handleUserClick = () => {
    router.push("/user/" + user.id);
  };
  return (
    <View
      className="bg-slate-200 dark:bg-slate-800"
      key={user.id}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View className="justify-center items-center w-2/5">
          <Image
            className="w-[90] h-[90] rounded-xl"
            source={require("../assets/istockphoto-1130884625-612x612.png")}
          />
        </View>
        <View className="w-3/5">
          <Text
            className="text- font-bold dark:text-slate-100"
            numberOfLines={3}
          >
            {user.name}
          </Text>
          <Text
            className="text-xs font-normal dark:text-slate-100"
            numberOfLines={3}
          >
            {user.company.name}
          </Text>
          <Text
            className="text-xs font-normal text-cyan-800 dark:text-cyan-600"
            style={styles.email}
            numberOfLines={3}
          >
            {user.email}
          </Text>
          <Text
            className="text-xs font-normal dark:text-slate-100"
            numberOfLines={3}
          >
            {address(user.address)}
          </Text>
          <Text
            className="text-xs font-normal dark:text-slate-100"
            numberOfLines={3}
          >
            {user.phone}
          </Text>
        </View>
      </View>
      <TouchableHighlight
        underlayColor={"none"}
        onPress={handleUserClick}
        style={styles.button}
      >
        <Text className="dark:text-slate-100">View Profile</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    minHeight: 150,
    width: "100%",
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
export default Cards;
