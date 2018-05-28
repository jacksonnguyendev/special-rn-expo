import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  InputItem,
  WhiteSpace,
} from 'antd-mobile';
import { human } from 'react-native-typography';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { updateFormValue } from '../../actions/form';
import ScreenLayout from '../../layouts/ScreenLayout';

// styles
import { gridStyle } from '../../styles';
import styles from './styles';
// assets
import colors from '../../assets/colors';
import LogoImage from '../../assets/images/CircleLogo.png';

type Props = {
  username: String,
  password: String,
  updateFormValue: Function,
}

class LoginScreen extends Component<Props> {
  render() {
    const { username, password } = this.props;
    return (
      <ScreenLayout>
        <KeyboardAvoidingView style={[gridStyle.flex1]} behavior="padding" keyboardVerticalOffset={0} enabled>
          <View style={[styles.logoWrapper, gridStyle.justifyCenter]}>
            <Image source={LogoImage} style={[styles.logo]} />
          </View>
          <WhiteSpace size="xl" />
          <View>
            <Text style={[human.title3, { fontWeight: '600' }]}>{I18n.t('appName')}</Text>
            <Text style={[human.subhead, { textAlign: 'justify', color: colors.sub_title_color }]}>{I18n.t('appDescription')}</Text>
          </View>
          <View style={[gridStyle.flex1, gridStyle.justifyCenter]}>
            <ScrollView style={[gridStyle.flex1, { width: '100%', maxHeight: 150 }]} bounces={false}>
              <InputItem
                clear
                value={username}
                style={{ marginLeft: 0 }}
                placeholder={I18n.t('authUsername')}
                onChange={(text) => {
                  const data = {
                    formName: 'loginForm',
                    key: 'username',
                    value: text,
                  };
                  this.props.updateFormValue(data);
                }}
              />
              <WhiteSpace size="md" />
              <InputItem
                type="password"
                clear
                style={{ marginLeft: 0 }}
                value={password}
                placeholder={I18n.t('authPass')}
                onChange={(text) => {
                  const data = {
                    formName: 'loginForm',
                    key: 'password',
                    value: text,
                  };
                  this.props.updateFormValue(data);
                }}
              />
              <WhiteSpace size="md" />
              <TouchableOpacity style={[gridStyle.alignSelfEnd]}>
                <Text style={[human.footnote, styles.forgotPassText]}>{I18n.t('forgotPass')}</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
        <View style={[gridStyle.justiSpaceAround, { flex: 0.3 }]}>
          <WhiteSpace />
          <Button type="primary">{I18n.t('login')}</Button>
          <WhiteSpace />
          <View style={[gridStyle.row, gridStyle.alignSelfCenter]}>
            <Text style={[
              human.subhead,
              {
                textAlign: 'justify',
                color: colors.sub_title_color,
              },
            ]}
            >{I18n.t('newUser')}
            </Text>
            <TouchableOpacity style={gridStyle.centerCenter}>
              <Text style={[{ fontWeight: 'bold', color: colors.title_color }]}> {I18n.t('signUp')}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScreenLayout>
    );
  }
}

const mapStateToProps = (state) => {
  const propDatas = {
    username: state.form.loginForm.username,
    password: state.form.loginForm.password,
  };
  return propDatas;
};

const mapActionToProps = {
  updateFormValue,
};

export default connect(mapStateToProps, mapActionToProps)(LoginScreen);
