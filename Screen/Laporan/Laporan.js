import React, { Component } from 'react'
import {View, Image, FlatList} from 'react-native'
import styles from './styles'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker'
/* import ImagePicker from 'react-native-image-crop-picker';
import {ActionSheet, Root} from 'native-base' */





export default class Laporan extends Component {
  constructor(){
		super();
		this.state={
			PickerValue:'',
      fileList : []
			
		}
		
	};

/*   onSelectedImage=(image)=>{
    let newDataImg = this.state.fileList;
    const source = {url: image.path};
    let item = {
      id : Date.now(),
      url : source,
      content : image.data
    };
    newDataImg.push(item);
    this.setState({fileList : newDataImg})
  }

  takePicture=()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.onSelectedImage(image);
      console.log(image);
    });
  }
 */


  /*  onClickAddImage = ()=>{
    const BUTTON = ['Take Photo', 'Choose Photo Library', 'Cancel'];
    ActionSheet.show(
      {option: BUTTON, cancelButtonIndex: 2, title : 'Select a Photo'},
      buttonIndex =>{
        switch (buttonIndex){
          case 0:
            break;
            case 1:
              break;

        }
      })
  }  */

 /*  renderItem = (item) =>{
      return(
        <View>
          <Image source={item.url} style={styles.itemImage}/>
        </View>
      )


  } */


    render() {
     /*  let {fileList} = this.state; */
        return (
            
            <View style={styles.container}>
            <KeyboardAwareScrollView
              style={{flex: 1, width: '100%'}}
              keyboardShouldPersistTaps="always">
             
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#aaaaaa"
               
               
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <Picker
                selectedValue={this.state.PickerValue}
                style={styles.input}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ PickerValue: itemValue })
                }
                underlineColorAndroid="transparent"
                autoCapitalize="none">
                <Picker.Item label="Pilih Kejadian" value=" " color="#aaaaaa"/>
                <Picker.Item label="Kebakaran" value="kebakaran" />
                <Picker.Item label="Bencana" value="bencana" />
                <Picker.Item label="Pembunuhan" value="pembunuhan" />
                <Picker.Item label="Perampokan" value="perampokan" />
                <Picker.Item label="Pemerkosaan" value="pemerkosaan" />
                <Picker.Item label="Pelecehan" value="pelecehan" />
                
              </Picker>
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder="Address"
               
               
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.area}
                multiline={true}
                numberOfLines={10}
                
                placeholderTextColor="#aaaaaa"
                placeholder="Keterangan"


                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
             
               {/* 
               <FlatList
                data ={fileList}
                renderItem = {this.renderItem}
                keyExtractor={(item, index)=> index.toString()}
                Extradata = {this.state}
              /> */}
            
                
           
            <Image
                    style={styles.logo}
                    source={require('../../assets/camera.png')}
                    onPress={this.onClickAddImage}/>
             
             
              <TouchableOpacity
                
                style={styles.button}
              /*  onPress={() =>this.props.navigation.navigate("Dashboard")} */ >
                <Text style={styles.buttonTitle}>Lapor</Text>
              </TouchableOpacity>
              
              </KeyboardAwareScrollView>
              </View>
        )
    }
}