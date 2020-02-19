import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? '0' : '30px'};
`;
