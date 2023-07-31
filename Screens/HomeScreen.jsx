import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./PfofileScreen";

const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerTitleAlign: "center",

        headerStyle: {
          borderBottomWidth: 1,
          borderColor: "#E5E5E5",
        },

        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.5)",

        tabBarStyle: {
          height: 83,
          paddingTop: 10,
          paddingBottom: 34,
          paddingHorizontal: 80,
          borderTopWidth: 1,
          borderColor: "#E5E5E5",
        },

        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16, marginBottom: 10 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" style={{marginTop: 10}} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16, marginBottom: 10 }}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Feather name="arrow-left" size={24} color="#212121" style={{marginTop: 10}} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Профіль",
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16, marginBottom: 10 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" style={{marginTop: 10}} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});