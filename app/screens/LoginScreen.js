// import React, {useState} from 'react'; 
// import { Image, StyleSheet } from 'react-native';


// import Screen from '../components/Screen';
// function LoginScreen(props) {
//     // const [email, setEmail] = useState();
//     // const [password, setPassword] = useState();

//     return (
//         <Screen style={styles.container}>
//          <Image 
//             style={styles.logo}
//             source={require("../assets/logo-red.png")}/>
//         </Screen>
//     );
// }
// const styles = StyleSheet.create({
//             container: {
//                 padding: 10,
//             },
        
//             logo: {
//                 width: 80,
//                 height: 80,
//                 alignSelf: 'center',
//                 marginTop: 50,
//                 marginBottom: 20,
//             },   
//         });
//         export default LoginScreen;

//2nd
// import React, {useState} from 'react';
// import { Image, StyleSheet } from 'react-native';

// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';

// function LoginScreen(props) {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//         return (
//         <Screen style={styles.container}>>
//          <Image 
//             style={styles.logo}
//             source={require("../assets/logo-red.png")}/> 

//         <AppTextInput
//             autoCapitalize="none" // First letter will not be capitalized
//             autoCorrect={false} // we dont want corrent spelling
//             icon="email"
//             keyboardType="email-address"
//             // name="email"
//             placeholder="Email"
//             textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
//         /> 
//         <AppTextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//           // name="password"
//           placeholder="Password"
//           secureTextEntry
//           textContentType="password"
//         />
//                  <AppButton title="Login" onPress={() => console.log(email, password)} />
        
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     }    
// })

// export default LoginScreen;

// import React, {useState} from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';
// import AppText from '../components/AppText'
// import ErrorMessage from '../components/ErrorMessage';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password"),
//   });


// function LoginScreen(props) {
//    // const [email, setEmail] = useState();
//     // const [password, setPassword] = useState();

//     return (
//         <Screen style={styles.container}>
//          <Image 
//             style={styles.logo}
//             source={require("../assets/logo-red.png")}/> 
//         <Formik
//             initialValues={{email: '', password:''}}
//             onSubmit={values => console.log(values)}
//             validationSchema={validationSchema}
//          >
//       { ({handleChange, handleSubmit,errors,setFieldTouched, touched}) => (
//         <>
//         <AppTextInput
//             autoCapitalize="none" // First letter will not be capitalized
//             autoCorrect={false} // we dont want corrent spelling
//             icon="email"
//             onChangeText={handleChange("email")}
//             keyboardType="email-address"
//             onBlur={() => setFieldTouched("email")}
//             //onChangeText={text => setEmail(text)}
//             // name="email"
//             placeholder="Email"
//             textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
//         /> 
//         {/* <AppText style={{ color: 'red'}}>
//                     {errors.email}
//                 </AppText> */}
//                 {/* <ErrorMessage error={errors.email} /> */}
//                 <ErrorMessage error={errors.email} visible={touched.email} />
//                 {touched.email && <ErrorMessage error={errors.email} />}
//         <AppTextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//             onBlur={() => setFieldTouched("password")}
//          //onChangeText={handleChange("password")}
//           // name="password"
//           //onChangeText={text => setPassword(text)}
//           placeholder="Password"
//           secureTextEntry
//           textContentType="password"
//         />
//         <ErrorMessage error={errors.password} visible={touched.password} />
//            <ErrorMessage error={errors.password} /> 
//          <AppButton title="Login" 
//          //onPress={() => console.log(email, password)}
//          onPress={handleSubmit} 
//          />
// {/*          
//          <AppText style={{ color: 'red'}}>
//                     {errors.password}
//                     </AppText> */}
                    

//          </>
//       )}
//       </Formik>

//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     }    
// })

// export default LoginScreen;


import React, {useState} from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/forms/ErrorMessage';
// import AppFormField from '../components/Forms/AppFormField';
// import SubmitButton from '../components/SubmitButton';
// import AppForm from '../components/Forms/AppForm';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

function LoginScreen(props) {
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
         <Image 
            style={styles.logo}
            source={require("../assets/logo-red.png")}/> 
        {/* <Formik */}
        <AppForm
            initialValues={{email: '', password:''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {/* { ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => ( */}
                {/* { () => ( 
              <> */}
                {/* <AppTextInput */}
                <AppFormField
                    autoCapitalize="none" // First letter will not be capitalized
                    autoCorrect={false} // we dont want corrent spelling
                    icon="email"
                    keyboardType="email-address"
                    // onBlur={() => setFieldTouched("email")}
                    // onChangeText={handleChange("email")}
                    // onChangeText={text => setEmail(text)}
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
                /> 
                {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
                {/* {touched.email && <ErrorMessage error={errors.email} />} */}
                {/* <ErrorMessage error={errors.email} /> */}
                {/* <AppText style={{ color: 'red'}}>
                    {errors.email}
                </AppText> */}
        {/* <AppTextInput */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
        //   onBlur={() => setFieldTouched("password")}
        //   onChangeText={handleChange("password")}
          //onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        {/* <AppText style={{ color: 'red'}}>
                    {errors.password}
              </AppText> */}
        {/* <ErrorMessage error={errors.password} /> */}
        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
         {/* <AppButton 
            title="Login" 
            //onPress={() => console.log(email, password)}
            onPress={handleSubmit} 
        /> */}
        <SubmitButton title="Login" />
      {/* </>  
    )}
        </Formik> */}
        </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },   
});
export default LoginScreen;
        
