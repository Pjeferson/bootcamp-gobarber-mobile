import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? '0' : '30px'};
`;

export const HoursList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  margin: 0 10px 20px;
  padding: 20px;
  flex: 1;
  align-items: center;

  opacity: ${props => (props.enabled ? 1 : 0.6)};
`;

export const Time = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
