import { DimensionValue, StyleSheet } from "react-native";

export const Theme = {
  backgroundColor: "#25292e",
  text: {
    color: "white",
    fontSize: 18,
  },
  borderRadius: 10,
  padding: 3,
  button: {
    backgroundColor: "transparent",
    borderColor: "#0366d6",
    borderWidth: 0,
    color: "white",
    borderRadius: 10,
    width: "100%" as DimensionValue,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
};

// export const Theme = StyleSheet.create({

//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#25292e',
//   //   alignItems: 'center',
//   // },
//   // imageContainer: {
//   //   flex: 1,
//   //   paddingTop: 58,
//   // },
//   // footerContainer: {
//   //   flex: 1 / 3,
//   //   alignItems: 'center',
//   // },
//   // buttonContainer: {
//   //   width: 320,
//   //   height: 68,
//   //   marginHorizontal: 20,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   padding: 3,
//   // },
//   // button: {
//   //   borderRadius: 10,
//   //   width: '100%',
//   //   height: '100%',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   flexDirection: 'row',
//   // },
//   // buttonIcon: {
//   //   marginRight: 10,
//   // },
//   // buttonLabel: {
//   //   color: 'white',
//   //   fontSize: 18,
//   // },
//   // image: {
//   //   width: 320,
//   //   height: 440,
//   //   borderRadius: 18,
//   // },
// });
