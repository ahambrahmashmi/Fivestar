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
import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {getSportsAction} from '../../redux/EditDetails/action';
import Zipcodemodal from '../ModalScreen/zipcodemodal';

getSportsAction;
interface userType {
  title?: string;
  setOpen?: boolean;
  open?: boolean;
  Edit?: any;
  route?: any;
  params?: any;
  item?: any;
  placeholderTextColor?: any;
}
const Edit = (props: userType) => {
  const navigation = useNavigation<any>();

  const [identity, setIdentity] = useState<string>('Select your identity');
  const [coverimg, setCoverimg] = useState<any>();
  const [profileimage, setProfileimage] = useState<any>();
  const [modal, setModalOpen] = useState<boolean>(false);

  const [date, setDate] = useState<any>(new Date());
  const [open, setOpen] = useState(false);
  const [modalScreen, setmodalScreen] = useState<boolean>(false);
  const [zipcode, setZipcode] = useState<string>('Zipcode*');
  const [selecteditem, setSelecteditem] = useState<any>([]);
  const [add, setAdd] = useState<any>([]);
  const [text,setText]=useState<any>('');
  const {params} = useRoute();

  const dispatch = useDispatch<any>();
  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );
  // console.log('data ---------->',DATA_SIGN_UP.data.username);
  // console.log('splash',DATA_SIGN_UP);

  const {Zipcode_Data} = useSelector((store: any) => store.zipcodeReducer);

  let UserName = DATA_SIGN_UP.data.username;

  let token = DATA_SIGN_UP.data.authToken;
  // console.log('tojken',token);
// useEffect(() => {
//   console.log('idebtuuabsdfasdf---->>>',identity);
  
// setIdentity('Select your identity')
// }, [identity])

  const Navigatesports = () => {
    dispatch(
      getSportsAction(
        token,
        (response: any) => {
          if (response.data.statusCode == 200) {
            navigation.navigate('Sports', {
              call: (params: any) => {
                setSelecteditem(params);
              },
            });
          }
        },
        (errorApI: any) => {
          Alert.alert('API NOT HIT', errorApI);
        },
      ),
    );
  };

  const Navigatezipcode = () => {
    setmodalScreen(!modal);
  };

  React.useEffect(() => {
    //@ts-ignore
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

  const handlecross = (index: number) => {
    selecteditem.splice(index, 1);
    setSelecteditem([...selecteditem]);
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

        <Modal isVisible={modalScreen}>
          <Zipcodemodal
            setZipcode={setZipcode}
            setmodalScreen={setmodalScreen}
            zipcode={zipcode}
            modalScreen={modalScreen}
          />
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
          value={UserName}
          placeholder={STRINGS.LABEL.USERNAME}

          // onChangeText={(text:any)=>setText(text)}
          // onFocus={()=>setText(text)}

          right={() => (
            <TouchableOpacity style={styles.pencil}
            onFocus={()=>setText(UserName)}
            >
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

        <TouchableOpacity
          style={styles.identitydesign}
          onPress={Navigatezipcode}>
          <Text style={styles.sportstext}>{zipcode}</Text>
        </TouchableOpacity>

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

        <TouchableOpacity style={styles.sportsView} onPress={Navigatesports}>
          {selecteditem.length < 1 ? (
            <Text style={styles.sportswatch}>{'Sports I Watch'}</Text>
          ) : (
            // JSON.stringify(selecteditem)
            selecteditem.map((element: any, index: number) => {
              return (
                <View style={styles.viewMap}>
                  <Text style={styles.elementtxt}>{element}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      handlecross(index);
                    }}>
                    <Image style={styles.crossimg} source={images.cross} />
                  </TouchableOpacity>
                </View>
              );
            })
          )}

          {selecteditem.length > 0 ? (
            <TouchableOpacity onPress={Navigatesports}>
              <Image style={{height: 20, width: 100}} source={images.add} />
            </TouchableOpacity>
          ) : null}
        </TouchableOpacity>
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
