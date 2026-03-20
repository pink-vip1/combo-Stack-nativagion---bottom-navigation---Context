import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import CustomTextInput from '../../components/CustomTextInput';
import IconButton from '../../components/IconButton';

export default function SignInScreen() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ĐĂNG NHẬP</Text>

      {/* Sử dụng CustomTextInput cho Email và Password */}
      <CustomTextInput
        placeholder="Nhập Email của bạn"
        value={email}
        onChangeText={setEmail}
      />
      
      <CustomTextInput
        placeholder="Nhập Mật khẩu"
        secureTextEntry={true} // Giấu mật khẩu thành dấu sao (*)
        value={password}
        onChangeText={setPassword}
      />

      {/* Nút đăng nhập chính gọi hàm login */}
      <IconButton 
        title="ĐĂNG NHẬP" 
        bgColor="#007BFF" 
        textColor="#FFF" 
        onPress={login} 
      />
      
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Hoặc đăng nhập với</Text>
        <View style={styles.divider} />
      </View>

      {/* Sử dụng IconButton cho Google và Facebook */}
      <IconButton 
        title="Google" 
        bgColor="#DB4437" 
        textColor="#FFF" 
        onPress={() => console.log('Bấm Google')} 
      />
      
      <IconButton 
        title="Facebook" 
        bgColor="#4267B2" 
        textColor="#FFF" 
        onPress={() => console.log('Bấm Facebook')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
  }
});