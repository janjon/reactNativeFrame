import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import styled from "styled-components/native";

var fullHeight = Dimensions.get('window').height;

class LoginPage extends Component {
  handleLogin = () => {
    console.log('登录');
  }

  handleRegister = () => {
    console.log('注册');
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <Root>
        <LogoBox>
          <LogoImage source={require('../images/logo.png')} />
        </LogoBox>
        <View>
          <InputItem
            type='phone'
            {...getFieldProps('phone', {
              initialValue: '',
              rules: [{ required: true, message: '请输入手机号!' }],
            }) }
            placeholder='手机号'
            clear
            error={!!getFieldError('phone')}
            onErrorClick={() => {
              Alert.alert(getFieldError('phone').join('、'));
            }}
          >
            <Ionicons name='ios-phone-portrait-outline' size={24} />
          </InputItem>
          <InputItem
            type='password'
            {...getFieldProps('password', {
              initialValue: '',
              rules: [{ required: true, message: '请输入密码!' }],
            }) }
            error={!!getFieldError('password')}
            onErrorClick={() => {
              Alert.alert(getFieldError('password').join('、'));
            }}
            placeholder='密码'
          >
            <Ionicons name='ios-lock-outline' size={24} />
          </InputItem>
        </View>
        <ButtonsBox>
          <SignUpBtn type='ghost' onClick={this.handleRegister}>注册</SignUpBtn>
          <SignInBtn type='primary' onClick={this.handleLogin}>登录</SignInBtn>
        </ButtonsBox>
      </Root>
    );
  }
}

const Root = styled.View`
  backgroundColor: #fff;
  flex: 1;
`;

const LogoBox = styled.View`
  height: ${fullHeight / 3};
  justifyContent: center;
  alignItems: center;
`;

const LogoImage = styled.Image``;

const ButtonsBox = styled.View`
  paddingTop: 20;
  paddingHorizontal: 10;
  flexDirection: row;
`;

const SignUpBtn = styled(Button) `
  marginRight: 10;
  flex: 1;
`;

const SignInBtn = styled(Button) `
  flex: 1;
`;

export default createForm()(LoginPage);
