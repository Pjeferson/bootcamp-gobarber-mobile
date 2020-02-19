import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data }) {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: data.provider.avatar && data.provider.avatar.url }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{data.date}</Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
