
import Snackbar from 'react-native-snackbar'
import { COLOR } from './color';
const showSnackbar = (title: string, _: any = 'black') => {
    if (title !== '' && title !== undefined && title !== null) {
      Snackbar.show({
        text: title,
        duration: 2000,
        numberOfLines: 3,
        textColor: COLOR.BLACK,
        backgroundColor: COLOR.LIGHTBLUE,
        action: {
          text: 'Close',
          textColor: COLOR.WHITE,
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    }
  };



export default{
  showSnackbar,
}