import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container } from './styles';

export default function SelectProvider() {
  return (
    <Background>
      <Container />
    </Background>
  );
}
