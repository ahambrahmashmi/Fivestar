import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import CustomTextInput from '../../component/customTextInput';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ModalScreens from '../ModalScreen/modalOpen';
import Modal from 'react-native-modal';
import {styles} from './style';
import {images} from '../../Utils/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {STRINGS} from '../../Utils/string';
import {COLOR} from '../../Utils/color';

interface userType {
  title?: string;
  setOpen?: boolean;
  open?: boolean;
  Edit?: any;
  route?: any;
  params?: any;
}
const Edit = (props: userType) => {
  const navigation = useNavigation<any>();
  const [identity, setIdentity] = useState('Select your identity');
  const [coverimg, setCoverimg] = useState<any>();
  const [profileimage, setProfileimage] = useState<any>();
  const [modal, setModalOpen] = useState<boolean>(false);

  const [date, setDate] = useState<any>(new Date());
  const [open, setOpen] = useState(false);

  const {params} = useRoute();
  
  React.useEffect(() => {
    setIdentity(params);
  }, [navigation]);

  const openmodal = () => {
    setModalOpen(!modal);
  };
  const opencalendar = () => {
    setOpen(true);
  };

  const imageOpencover = async () => {
    return ImagePicker.openPicker({
      cropping: true,
      height: 198,
      width: 353,
    })
      .then(image => {
        setCoverimg(image.path);
      })
      .catch(err => {
        console.log('ImageErr', err);
      });
  };

  const imgageOpenprofile = async () => {
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
      });
      setProfileimage(image.path);
    } catch (err) {
      console.log('ImageErr', err);
    }
  };

  const Navigatedit = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.mainparent}>
      <StatusBar barStyle={'light-content'} translucent={true} />

      <View style={styles.parent}>
        <Modal isVisible={modal}>
          <ModalScreens
            setIdentity={setIdentity}
            setModalOpen={setModalOpen}
            identity={identity}
            modal={modal}></ModalScreens>
        </Modal>
        <Text style={styles.textcolor}>{STRINGS.LABEL.JOHN}</Text>
        <Text style={styles.textcolor}>{STRINGS.LABEL.TELL}</Text>
      </View>
      <KeyboardAwareScrollView
        bounces={false}
        extraHeight={120}
        style={styles.submitbuttonmargin}>
        <View style={styles.cover}>
          <TouchableOpacity activeOpacity={0.8} onPress={imageOpencover}>
            <View style={styles.rectangle}>
              <Image source={{uri: coverimg}} style={styles.rectangleImage} />
              <Image style={styles.coverRectangle} source={images.smallcamra} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={imgageOpenprofile}>
            <View style={styles.prof}>
              <Image style={styles.prof1} source={{uri: profileimage}} />
              <Image source={images.smallcamra} style={styles.cameraSquare} />
            </View>
          </TouchableOpacity>
        </View>
        <CustomTextInput
          label={STRINGS.LABEL.USERNAME}
          placeholder={STRINGS.LABEL.USERNAME}
          right={() => (
            <TouchableOpacity style={styles.pencil}>
              <Image
                style={styles.pencilimage}
                source={images.edit}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity style={styles.identitydesign} onPress={openmodal}>
          <Text style={styles.identitytext}>{identity}</Text>
          <Image style={styles.nextimg} source={images.nexticon} />
        </TouchableOpacity>

        <CustomTextInput
          label="Date of Birth"
          value={[
            date.getMonth() + 1,
            '-',
            date.getDate(),
            '-',
            date.getFullYear(),
          ].join('')}
          placeholder={STRINGS.LABEL.DOB}
          placeholderTextColor={COLOR.TEXTCOLOR}
          right={() => (
            <TouchableOpacity
              style={styles.toucablecalendar}
              onPress={opencalendar}>
              <Image style={styles.calenderimg} source={images.calendar} />
              <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={date => {
                  setDate(date);
                  setOpen(false);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </TouchableOpacity>
          )}
        />

        <CustomTextInput
          label="Bio"
          multiline={true}
          placeholder="Bio"
          placeholderTextColor={COLOR.TEXTCOLOR}
        />
        <CustomTextInput
          label="Referral"
          placeholder={STRINGS.LABEL.referral}
          placeholderTextColor={COLOR.TEXTCOLOR}
        />

        <CustomTextInput
          label="Sport Watch"
          placeholder={STRINGS.LABEL.sports}
          multiline={true}
          placeholderTextColor={COLOR.TEXTCOLOR}
        />
      </KeyboardAwareScrollView>
      <View>
        <TouchableOpacity onPress={Navigatedit} style={styles.submitbutton}>
          <Text style={styles.button}>{STRINGS.LABEL.SUBMITBUTTON}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;
