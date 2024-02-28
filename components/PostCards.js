import { View, Text } from "react-native";
import React from "react";

const PostCards = ({ post }) => {
  return (
    <View
      className="bg-slate-200 dark:bg-slate-800 mb-2 min-h-[100] p-3"
      key={post.id}
    >
      <Text className="font-bold text-sm dark:text-slate-200 mb-2">
        {post.title}
      </Text>
      <Text className="font-normal text-xs dark:text-slate-100">
        {post.body}
      </Text>
    </View>
  );
};

export default PostCards;
