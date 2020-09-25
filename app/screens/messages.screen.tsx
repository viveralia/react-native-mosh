import React, { FC, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import AppScreen from "../components/@common/app-screen";
import {
  AppListItem,
  AppListItemDeleteAction,
  AppListItemSeparator,
} from "../components/@common/lists";

interface IMessage {
  id: number;
  title: string;
  description: string;
  image: any;
}

const initialMessages = [
  {
    description: "D1",
    id: 1,
    image: require("../assets/mosh.jpg"),
    title: "T1",
  },
  {
    description: "D2",
    id: 2,
    image: require("../assets/mosh.jpg"),
    title: "T2",
  },
];

const MessagesScreen: FC = () => {
  const [messages, setMessages] = useState<IMessage[]>(initialMessages);
  const [refreshing] = useState(false);

  const handleDelete = (message: IMessage) => {
    setMessages((messages) => messages.filter((m) => m.id !== message.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(`Pressed item #${item.id}`)}
            renderRightActions={() => (
              <AppListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={AppListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              description: "D2",
              id: 2,
              image: require("../assets/mosh.jpg"),
              title: "T2",
            },
          ]);
        }}
      />
    </AppScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
