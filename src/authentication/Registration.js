//Registration page with dob
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from "react-native";

import { COLORS, FONTS, SPACING } from "./style";
import { CheckBox } from "react-native-elements";

const commonInputStyle = {
  height: 60,
  marginVertical: SPACING.MARGIN_VERTICAL,
  borderWidth: 1,
  paddingHorizontal: SPACING.PADDING_HORIZONTAL,
  borderRadius: 30,
  borderColor: COLORS.BORDER,
  color: COLORS.TEXT,
};


const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);





  const handleSignUp = async () => {

    if (!name.trim() || !email.trim() || !mobileNumber.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email.trim())) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }



    // Validate mobile number format
    if (!/^[789]\d{9}$/.test(mobileNumber.trim()) && !/^\+91[789]\d{9}$/.test(mobileNumber.trim())) {
      Alert.alert('Error', 'Mobile number should have 10 digits, excluding +91.');
      return;
    }


    // Check if the mobile number starts with +91
    if (!mobileNumber.trim().startsWith('+91')) {
      Alert.alert('Error', 'Mobile number should start with +91.');
      return;
    }

    // Validate password length
    if (password.trim().length < 6) {
      Alert.alert('Error', 'Password should be at least 6 characters long.');
      return;
    }


    // Check if the form is valid before submitting
    // if (!isFormValid) {
    //   Alert.alert('Error', 'Please fill all the fields correctly.');
    //   return;
    // }
    const customerData = {
      email: email,
      customer_name: name,
      mobile_number: mobileNumber,
      password: password,
    };




    try {
      console.log("customerData", customerData);
      const response = await axios.post(
        'http://13.200.75.208:4001/v1/users/signUp',
        customerData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      console.log('response', response.data);

      // Check the status code of the response
      if (response.status === 201) {
        // Successful registration
        Alert.alert('Sign Up Success', 'Customer registered successfully! Please login',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Login'),
            },
          ]
        );

        console.log("response", response);
        // You may navigate to another screen or perform additional actions here
      } else {
        // Handle other status codes
        console.error('Unexpected status code', response.status);
        Alert.alert(
          'Error',
          'An error occurred while processing your request. Please try again.',

        );
      }
    } catch (error) {
      // console.error('API request failed', error);

      // Check if the error has a response object
      if (error.response && error.response.status === 400) {
        // User already exists, provide guidance
        Alert.alert(
          'User Exists',
          'Mobile number already registered. Log in or use another number (e.g., +91 XXXXXXXXXX).',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Login'),
            },
          ]
        );

      } else {
        // Handle other errors
        Alert.alert('Error', 'An error occurred while processing your request.');
      }
    }

  }




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register New customer</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Mobile Number"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            title={
              <Text style={styles.terms}>
                By signing up, you agree to the{" "}
                <Text style={styles.termsHighlight}>Terms of Service</Text> and{" "}
                <Text style={styles.termsHighlight}>Privacy Policy.</Text>
              </Text>
            }
            checked={agreeTerms}
            onPress={() => setAgreeTerms(!agreeTerms)}
          />
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.or}>or</Text>
          <View style={styles.horizontalLine} />
        </View>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../../assets/google-icon.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>
          Already have an account ?{" "}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate("Login")}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.PADDING_HORIZONTAL,
    backgroundColor: COLORS.BACKGROUND,
  },
  title: FONTS.TITLE,
  terms: FONTS.TERMS,
  termsHighlight: FONTS.TERMS_HIGHLIGHT,
  input: commonInputStyle,
  signupButton: {
    ...commonInputStyle,
    height: 60,
    backgroundColor: COLORS.PRIMARY,
    borderColor: 'red',
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    marginBottom: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  or: {
    fontSize: 18,
    color: "grey",
    paddingHorizontal: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  googleButton: {
    height: 60,
    width: 140,
    margin: 10,
    borderWidth: 1,
    borderRadius: 40,
    color: "black",
    fontWeight: "800",
    alignSelf: "center",
    borderColor: "grey",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  googleImage: {
    width: 30,
    height: 30,
    marginRight: -10,
  },
  googleText: {
    color: "black",
    fontWeight: "600",
    alignSelf: "center",
    fontSize: 18,
  },
  signInText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
  signInLink: {
    color: "#EE272E",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
  // checkboxContainer: {
  //   marginVertical: 12,
  // },
});

export default Registration;