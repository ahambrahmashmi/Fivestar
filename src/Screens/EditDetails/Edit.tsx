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
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import {
  getChangeUsername,
  getcompleteProfile,
  getSportsAction,
} from '../../redux/EditDetails/action';
import Zipcodemodal from '../ModalScreen/zipcodemodal';
import {totalMonths} from 'react-native-paper-dates/lib/typescript/Date/dateUtils';
import {TextInput} from 'react-native-paper';

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
  const {DATA_SIGN_UP} = useSelector(
    (store: any) => store.createaccountReducer,
  );
  console.log('kdjfsbhcjkhbfa', DATA_SIGN_UP);

  let UserName = DATA_SIGN_UP.data.username;
  const [identity, setIdentity] = useState<string>('Select your identity');
  const [coverimg, setCoverimg] = useState<any>();
  const [profileimage, setProfileimage] = useState<any>();
  const [modal, setModalOpen] = useState<boolean>(false);
  const [date, setDate] = useState<any>(new Date());
  const [open, setOpen] = useState(false);
  const [modalScreen, setmodalScreen] = useState<boolean>(false);
  const [username, setusername] = useState<any>(UserName);
  const {params} = useRoute();
  const [error, seterror] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState('DOB(MM/DD/YYYY)');
  const dispatch = useDispatch<any>();

  const inputRef = useRef<any>(null); //DECLARE REF FOR EDITING ON PENCIL

  const {complete_profile_Data} = useSelector(
    (store: any) => store.sportsReducer,
  );
  let biodetail = complete_profile_Data?.data?.data?.personalDetails?.bio;
  let likedsports = complete_profile_Data.data?.data?.likedSport;
  let ZipCode = complete_profile_Data.data?.data?.zipcode;
  const [zipcode, setZipcode] = useState<string>(ZipCode); //FOR SET ZIPCODE
  const [selecteditem, setSelecteditem] = useState<any>(likedsports);
  const [bio, setBio] = useState<any>(biodetail);
  let token = DATA_SIGN_UP.data.authToken;
  let ID = DATA_SIGN_UP.data._id;
  let names = DATA_SIGN_UP.data.name;


  // =============>>>COMPLETE DISPATCH ACTION ON SUBMIT BUTTON<<<<<<<<<<================
  const completeprofile_hit = () => {
    navigation.navigate('Account');
    dispatch(
      getcompleteProfile(
        token,
        UserName,
        ID,
        zipcode,
        names,
        bio,
        selecteditem,
        (response: any) => {
          if (response.data.statusCode == 200) {
          }
        },
        (errorApI: any) => {
          Alert.alert('API NOT HIT', errorApI);
        },
      ),
    );
  };
  const onBlur = () => {
    //EDIT USERNAME ON BLUR ON PENCIL ICON
    dispatch(
      getChangeUsername(
        token,
        username,
        (response: any) => {
          if (response.data.statusCode == 200) {
          }
        },
        (errorApI: any) => {
          let suggenstion = errorApI.response.data.data.names;
          console.log('usernameSuggestion', errorApI.response.data.data.names);
          seterror([...suggenstion]);
        },
      ),
    );
  };

  // <<<<<<<<<<<<===========DISPATCH SPORTS ON SPOTS TEXTINPUT<<<<<===============
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
              selecteditem: selecteditem,
            });
          }
        },
        (errorApI: any) => {
          Alert.alert('API NOT HIT', errorApI);
        },
      ),
    );
  };

  const ONFOCUS = () => {
    //SEND CURRENT ONFOCUS ON PENCIL ICON
    inputRef?.current?.focus();
  };

  const Navigatezipcode = () => {
    //CLOSED ZIPCODE
    setmodalScreen(!modal);
  };

  React.useEffect(() => {
    //@ts-ignore
    setIdentity(params);
  }, [navigation]);

  const openmodal = () => {
    //OPEN MODAL IDENTITY
    setModalOpen(!modal);
  };
  const opencalendar = () => {
    //FOR CLOSED CALENDAR
    setOpen(true);
  };

  const onConfirmDate = (date: any) => {
    // CALL FOR DATE
    setOpen(false);
    setDate(date);
    setSelectedDate(
      [date.getMonth() + 1, '-', date.getDate(), '-', date.getFullYear()].join(
        '',
      ),
    );
    // console.log( Date(new Date().getDate() - Date('23-05-1998')))
  };

  const closedCalender = () => {
    //FUNCTION ON CLOSED DATE ON ICON
    setOpen(false);
  };

  const imageOpencover = async () => {
    //FUNCTION FOR COVER PICKER
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
    // FUNCTION FOR PROFILE PICKER
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
      });
      setProfileimage(image.path);
    } catch (err) {
      console.log('ImageErr', err);
    }
  };

  const handlecross = (index: number) => {
    // DELETE SELECTED ITEM
    selecteditem?.splice(index, 1);
    setSelecteditem([...selecteditem]);
  };
  const SuggestName = (item: any) => {
    //SET SUGGESTED NAME ON TEXTINPUT
    setusername(item);
  };

  const FlatList_Header = () => {
    //FOR FLATLIST HEADER
    return (
      <View style={styles.flatlistheader}>
        <Text style={styles.fontheaderertxt}>
          {' '}
          {STRINGS.LABEL.alreadyexits}{' '}
        </Text>
      </View>
    );
  };
  const _renderItem = ({item}: any) => {
    // RENDERITEM FOR SUGGESTION LIST
    return (
      <TouchableOpacity
        onPress={() => {
          SuggestName(item);
        }}>
        <Text style={styles.handlingAll}>{item},</Text>
      </TouchableOpacity>
    );
  };

  //===========>MAIN VIEW RETURN<===========//

  return (
    <View style={styles.mainparent}>
      <StatusBar barStyle={'light-content'} translucent={true} />

      <View style={styles.parent}>
        {/* ====>MPDAL FOR IDENTITY AND ZIPCODE  */}

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

        <Text style={styles.textcolor}>Hi {names}</Text>
        <Text style={styles.textcolor}>{STRINGS.LABEL.TELL}</Text>
      </View>
      <KeyboardAwareScrollView
        bounces={false}
        extraHeight={120}
        style={styles.submitbuttonmargin}>
        {/* ===>IMAGE PICKER FOR BACKGROUND AND PROFILE */}

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
        {/* ======>>>>CUSTOM TEXT INPUT<<<<===== */}
        <View>
          <TextInput
            mode={'outlined'}
            autoCapitalize="none"
            ref={inputRef} //FOR EDITING ON PENCIL IMAGE
            label={STRINGS.LABEL.USERNAME}
            value={username}
            onBlur={onBlur}
            placeholder={STRINGS.LABEL.USERNAME}
            onChangeText={(text: any) => setusername(text)}
            activeOutlineColor="white"
            outlineColor="white"
            selectionColor="#44C2E3"
            placeholderTextColor="white"
            theme={{
              colors: {
                text: '#44C2E3',
                placeholder: 'white',
              },
            }}
            style={styles.paper}
          />
          {/* ===>>>FLATLIST FOR SUGGESTION USERNAME  */}
          <View>
            {error.length > 0 && <FlatList_Header />}

            {error.length > 0 && (
              <View style={styles.suggestview}>
                <Text style={styles.suggestTXT}>{STRINGS.LABEL.suggest}</Text>

                <FlatList data={error} renderItem={_renderItem} horizontal />
              </View>
            )}
          </View>

          <TouchableOpacity onPress={ONFOCUS} style={styles.pencil}>
            <Image
              style={styles.pencilimage}
              source={images.edit}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {/* ==>>>>OPEN MODAL FOR IDENTITY */}
        <TouchableOpacity style={styles.identitydesign} onPress={openmodal}>
          <Text style={styles.identitytext}>
            {identity || 'Select your identity'}
          </Text>
          <Image style={styles.nextimg} source={images.nexticon} />
        </TouchableOpacity>
        {/* ===>>DATE PICKER <<<<<<<<<<<<==== */}
        <CustomTextInput
          label="Date of Birth"
          value={selectedDate}
          right={() => (
            <TouchableOpacity
              style={styles.toucablecalendar}
              onPress={opencalendar}>
              <Image style={styles.calenderimg} source={images.calendar} />
              <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={onConfirmDate}
                onCancel={closedCalender}
              />
            </TouchableOpacity>
          )}
        />
        {/* ===========>>>>ZIPCODE<<<<<<====== */}
        <TouchableOpacity
          style={styles.identitydesign}
          onPress={Navigatezipcode}>
          <Text style={styles.sportstext}>{zipcode}</Text>
        </TouchableOpacity>

        <CustomTextInput
          label="Bio"
          multiline={true}
          placeholder="Bio"
          value={bio}
          placeholderTextColor={COLOR.TEXTCOLOR}
          onChangeText={(text: any) => {
            setBio(text);
          }}
        />
        <CustomTextInput
          label="Referral"
          placeholder={STRINGS.LABEL.referral}
          placeholderTextColor={COLOR.TEXTCOLOR}
        />

        {/* =============>>>>>.SPORTS TEXTINPUT<<<<<<<<<<<<<<====== */}

        <TouchableOpacity style={styles.sportsView} onPress={Navigatesports}>
          {selecteditem?.length < 1 ? (
            <Text style={styles.sportswatch}>{'Sports | Watch'}</Text>
          ) : (
            selecteditem?.map((element: any, index: number) => {
              //APPLY MAP
              return (
                <View style={styles.viewMap}>
                  <Text style={styles.elementtxt}>{element?.sportName}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      handlecross(index); //DELETE SELECTED ITEM
                    }}>
                    <Image style={styles.crossimg} source={images.cross} />
                  </TouchableOpacity>
                </View>
              );
            })
          )}

          {selecteditem?.length > 0 ? ( // ADD BUTTON
            <TouchableOpacity onPress={Navigatesports}>
              <Image style={styles.addimg} source={images.add} />
            </TouchableOpacity>
          ) : null}
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <View>
        <TouchableOpacity
          onPress={completeprofile_hit} // COMPLETE PROFITE ACTION HIT
          style={styles.submitbutton}>
          <Text style={styles.button}>{STRINGS.LABEL.SUBMITBUTTON}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;
