import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data }) {
  const dateFormatted = useMemo(() => {
    return formatDistance(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{ uri: data.provider.avatar && data.provider.avatar.url }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateFormatted}</Time>
        </Info>
      </Left>
      {data.cancelable && (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
