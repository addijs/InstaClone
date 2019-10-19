import React, { useState, useEffect } from 'react';
import { 
  TouchableWithoutFeedback, 
  Keyboard, 
  Button, 
  AsyncStorage,
} from 'react-native';
import ImagePicker from 'react-native-image-picker'

import { Container, UserPhoto } from './style';
import { Input } from '../Login/style';

import api from '../../services/api';

export default function CreatePost({ navigation }) {
  const [user, setUser] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function loadUser() {
      const loggedUser = await AsyncStorage.getItem('user');
      setUser(loggedUser);
    }

    loadUser();
  }, []);

  function handleChoosePhoto() {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) setPhoto(response);
    })
  }

  async function submit() {
    const data = new FormData();
    data.append('user', user);
    data.append('description', description);
    data.append('postThumb', {
      name: photo.fileName,
      type: photo.type,
      uri: photo.uri
    });

    await api.post('/posts', data);
    setDescription('');
    alert('Your post was publicated');
    navigation.navigate('Main');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <Container>
        { photo ? (
          <>
            <UserPhoto source={{ uri: photo.uri }} />
            <Input
              value={description}
              placeholder='Enter a description'
              onChangeText={text => setDescription(text)}
            />
            <Button title='Send a post' onPress={submit} />
          </>
          ) :
          <Button title='Choose your photo!' onPress={handleChoosePhoto} />
        }
      </Container>
    </TouchableWithoutFeedback>
  );
}