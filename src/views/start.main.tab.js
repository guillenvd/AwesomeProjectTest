import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.mergeOptions({
    children: [
      {
        component: {
          name: 'rncreate.InboxScreen',
        }
      },
      {
        component: {
          name: 'rncreate.OutboxScreen',
        }
      }
    ],
  });
}


export default startTabs;