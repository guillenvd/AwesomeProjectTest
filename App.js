import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/views/home';
import InboxScreen from './src/views/inbox';
import OutboxScreen from './src/views/outbox';

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('InboxScreen', () => InboxScreen);
Navigation.registerComponent('OutboxScreen', () => OutboxScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppTest',
        children: [
          {
            component: {
              name: 'HomeScreen',
            }
          }
        ]
      }
    }
  });
});