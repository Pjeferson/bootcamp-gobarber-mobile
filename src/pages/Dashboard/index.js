import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';
import api from '~/services/api';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const response = await api.get('/appointments');

        setAppointments(response.data);
      } catch (error) {
        Alert.alert(
          'Falha ao carregar agendamentos',
          'Não foi possível carregar os seus agendamentos.'
        );
      }
    }
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    try {
      await api.delete(`/appointments/${id}`);

      setAppointments(
        appointments.map(appointment =>
          appointment.id === id
            ? {
                ...appointment,
                cancelable: false,
              }
            : appointment
        )
      );
    } catch (error) {
      Alert.alert(
        'Falha ao cancelar agendamento',
        'Não foi possível cancelar o agendamento. Verifique o mesmo.'
      );
    }
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
