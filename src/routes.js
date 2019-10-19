import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fadeIn, fromRight, fromLeft } from 'react-navigation-transitions';

import Login from './pages/Login';
import Main from './pages/Main';
import CreatePost from './pages/CreatePost';
import ListChat from './pages/ListChat';
import ChatScreen from './pages/ListChat/ChatScreen';

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'Login'
    && nextScene.route.routeName === 'Main') {
    return fadeIn();
  } else if (prevScene
    && prevScene.route.routeName === 'Main'
    && nextScene.route.routeName === 'CreatePost') {
    return fromLeft();
  }
  return fromRight();
}

const routes = createStackNavigator({
  Login,
  Main,
  CreatePost,
  ListChat,
  ChatScreen
}, {
  headerMode: 'none',
  transitionConfig: (nav) => handleCustomTransition(nav)
});

function AuthLoading({ navigation }) {
  const socket = useSelector(state => state.connectedSocket);
  async function chooseInitialRoute(socket) {
    navigation.navigate(socket ? 'Main' : 'Login');
  };

  useEffect(() => {
    chooseInitialRoute(socket);
  }, []);

  return (
    <View />
  );
}

const mainRoutes = createSwitchNavigator({
  AuthLoading,
  routes
});

export default createAppContainer(mainRoutes);