import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HoursList, Hour, Time } from './styles';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get(`/providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }
    loadSchedule();
  }, [date, provider.id]);

  function handleSelectTime(time) {
    navigation.navigate('Confirm', { provider, time });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HoursList
          data={hours}
          keyExtractor={hour => hour.time}
          renderItem={({ item: hour }) => (
            <Hour
              onPress={() => handleSelectTime(hour.value)}
              enabled={hour.available}
            >
              <Time>{hour.time}</Time>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

SelectDateTime.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
